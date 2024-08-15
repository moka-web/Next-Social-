import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';
import { AccesDeniedError } from './services/common/http.error';
import authApi from './services/auth/auth.api';
import { ok } from 'assert';





const getAuthenticationHeaders=(request: NextRequest,accessToken:string)=>{

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-social-access-token', accessToken)
 
 
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}


const  getAccessToken= async (sessionId:string): Promise<string>=>{
  
  return (await authApi.getRedisValue(sessionId)).value

}


export async function middleware(request: NextRequest) {

  try {

    const sessionId =request.cookies.get('SocialSessionID')?.value ?? ""
    
    if (!sessionId)
      throw new AccesDeniedError("session id is not valid anymore");
   
    const accesToken = await getAccessToken(sessionId);

    if (!accesToken)
      throw new AccesDeniedError("session id is not valid anymore");

     
    return getAuthenticationHeaders(request,accesToken)
    
  } catch (error) {
    if (error instanceof AccesDeniedError) {
      
      if (!request.url.endsWith('/profile')) {
          
          
            return NextResponse.next()
         
      }
    
    }

    return NextResponse.redirect(new URL('/login', request.url))
  }
 
}


 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/messages/:path*','/profile','/api/proxy/:path*']
}