import { AccesDeniedError } from "@/services/common/http.error";
import { type NextRequest } from "next/server";
export const dynamic = 'force-dynamic' 
import authService from "@/services/auth/auth.service";
import { LoginScheme } from "@/schemes/LoginScheme";
import { cookies, headers } from "next/headers";
import httpinternalapi from "@/services/common/http.internal.service";




export async function POST ( request : Request){

  const url = request.url.split("/proxy")[1]
  const accessToken = headers().get('x-social-access-token')
  const body =  await request.json();
    
  console.log(JSON.stringify({
    url : url,
    accessToken : accessToken,
    body : body
  }))

 const response =  await httpinternalapi.httpPost(url,body,accessToken?? undefined)
  
   return new Response(JSON.stringify(response),{status:200})
  
}



export async function GET (request : Request){
  const url = request.url.split("/proxy")[1]
  const accessToken = headers().get('x-social-access-token')


 const response =  await httpinternalapi.httpGet(url,undefined,accessToken ?? undefined )
  
   return new Response(JSON.stringify(response),{status:200})
  

}