import { loginResponseType, RedisResponseType } from "@/types/auth.types";
import httpinternalapi from "../common/http.internal.service";
import httpexternalapi from "../common/http.external.service";




    class AuthApi {

       
        getRedisValue = async (key: string) : Promise<RedisResponseType> =>httpexternalapi.httpGet( `/redis` ,new URLSearchParams({ key}));

        login = async (username : string, password:string ) : Promise<loginResponseType> =>httpexternalapi.httpPost( `/auth/login` ,{ username:username,password:password});

        loginInternal = async (username : string, password:string ) : Promise<loginResponseType> =>httpinternalapi.httpPostPublic( `/auth/login` ,{username:username,password:password});

        registerInternal = async (username : string, password:string,name:string,photoUrl:string ) : Promise<loginResponseType> =>httpinternalapi.httpPostPublic( `/auth/register` ,{username:username,password:password,name:name,photoUrl:photoUrl});

        register = async (username : string, password:string,name:string,photoUrl:string ) : Promise<loginResponseType> =>httpexternalapi.httpPost( `/auth/register` ,{username:username,password:password,name:name,photoUrl:photoUrl});

        logout = async () : Promise<loginResponseType> =>httpexternalapi.httpPost( `/auth/logout` ,{});

      
    }


const authApi = new AuthApi();
export default authApi; 
