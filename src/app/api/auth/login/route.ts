import { AccesDeniedError } from "@/services/common/http.error";
import { type NextRequest } from "next/server";
export const dynamic = 'force-dynamic' 
import authService from "@/services/auth/auth.service";
import { LoginScheme } from "@/schemes/LoginScheme";
import { cookies } from "next/headers";




export async function POST ( request : NextRequest){
  const {username , password} = await LoginScheme.validate( await request.json());
    
    try {      
      const loginResponse = await authService.Authenticate(username,password)

      cookies().set('SocialSessionID', loginResponse.sessionId,{
        expires: loginResponse.expiresAt,
        httpOnly:true,
        domain:'localhost',
        path:'/'        
      })

      cookies().set('SocialUsername', loginResponse.user.username,{
        expires: loginResponse.expiresAt,
        domain:'localhost',
        path:'/'        
      })

      return new Response(JSON.stringify(loginResponse.user),{status:200})

    } catch (e ) {
      
      if (e instanceof AccesDeniedError) {
        
        return new Response(JSON.stringify({error :'Ivalid credentials for user: ' + username }) , { status: 403 });  
      } else{
        
        return new Response(' internal server error ' , {
          status: 500 
        })

      }
    
    }
}
