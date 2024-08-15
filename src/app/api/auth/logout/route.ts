import { type NextRequest } from "next/server";
import authService from "@/services/auth/auth.service";
import { cookies } from "next/headers";



export async function POST ( request :NextRequest){

    try {
      const authCookie =request.cookies.get('SocialSessionId')

      if (authCookie) {
        const sessionId = authCookie.value
        await authService.logout(sessionId)
      
      }
       
        cookies().delete('SocialSessionID')
  
        cookies().delete('SocialUsername')


        return new Response(JSON.stringify({}),{
          status:200,
        })

    } catch (e ) {
      
     return new Response(JSON.stringify({
      error:'internal server error '
     }),{
      status: 500
     })
    
    }
}
