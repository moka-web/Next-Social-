import { UserType } from "./user.types";

export type loginResponseType ={

    accessToken : string;
    user : UserType
}   

export type AuthResponseType ={

    sessionId : string;
    user : UserType,
    expiresAt: number
}  

export type RedisResponseType ={

    value : string;
 
}  
