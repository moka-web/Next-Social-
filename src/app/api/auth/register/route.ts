import { AccesDeniedError, ConflictError } from "@/services/common/http.error";
import { type NextRequest } from "next/server";
export const dynamic = 'force-dynamic' 
import authService from "@/services/auth/auth.service";
import {RegisterScheme } from "@/schemes/RegisterScheme";
import { cookies } from "next/headers";




export async function POST ( request : NextRequest){

    const {username , password,name , photoUrl} = await RegisterScheme.validate( await request.json());
    
    try {
      
      const registerResponse = await authService.register(username,password,name , photoUrl);
      
      cookies().set('SocialSessionID', registerResponse.sessionId,{
        expires: registerResponse.expiresAt,
        httpOnly:true,
        domain:'localhost',
        path:'/'        
      })

      cookies().set('SocialUsername', registerResponse.user.username,{
        expires: registerResponse.expiresAt,
        domain:'localhost',
        path:'/'        
      })

        return new Response(JSON.stringify(registerResponse.user),{
          status:200,
       
        })

    } catch (e ) {
      
      if (e instanceof ConflictError) {
        
        return new Response(JSON.stringify({error :'User is already taken: ' + username }) , { status: 409 });  
      } else{
        
        return new Response(' internal server error ' , {
          status: 500 
        })

      }
    
    }
}
