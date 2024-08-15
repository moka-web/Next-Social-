import { createClient, RedisClientType } from "redis";
import { AccesDeniedError } from "../common/http.error";
import { AuthResponseType, loginResponseType } from "@/types/auth.types";

import { v4 as uuidv4 } from "uuid";
import authApi from "./auth.api";
const TEN_MINUTE = 60 * 10;

class AuthService {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: `redis://default:SocialNetworkPass@localhost:6379`,
    });
    this.client.connect().then(() => {
      console.log("connected to redis ");
    });
  }

  async Authenticate(username: string,password: string): Promise<AuthResponseType> {
    
    const loginResponse = await authApi.loginInternal(username, password);

    return this.buildAuthResponse(loginResponse)
  }

  async getAccesToken(sessionId?: string): Promise<string> {
    if (!sessionId)
      throw new AccesDeniedError("session id is not valid anymore");
    const accesToken = await this.client.get(sessionId);

    if (!accesToken)
      throw new AccesDeniedError("session id is not valid anymore");

    return accesToken;
  }

  async getRedisValue(key: string): Promise<string | null> {
    return await this.client.get(key);
  }



  buildAuthResponse(loginResponse: loginResponseType): AuthResponseType {
    const sessionId = uuidv4();

    const now = new Date();
    const expiresAt = new Date(now.getTime() + TEN_MINUTE * 1000).getTime();

    this.client.set(sessionId, loginResponse.accessToken, { EX: TEN_MINUTE });

    return {
      sessionId: sessionId,
      user: loginResponse.user,
      expiresAt: expiresAt,
    };
  }

  async register( username: string,password: string,name: string,photoUrl: string): Promise<AuthResponseType> {
    
    const loginResponse = await authApi.registerInternal(username,password,name,photoUrl);

    return this.buildAuthResponse(loginResponse)

  }


  async logout (sessionId:string):Promise<void>{
    await this.client.del(sessionId)
  }
}

const authService = new AuthService();
export default authService;
