

const API_URL = "http://localhost:8080/api"
const  API_PUBLIC_ENDPOINT = `/public`


import { UserType } from "@/types/user.types"
import { error } from "console";
import URLSearchParams from "url"
import { AccesDeniedError } from "./http.error";
import { promises } from "dns";

export class HttpBaseApi{
  
  protected privateEndpoint : string;
  protected publicEndpoint : string;

  constructor(privateEndpoint:string , publicEndpoint:string){
    this.privateEndpoint = privateEndpoint;
    this.publicEndpoint = publicEndpoint;
  }


  async httpGet <T> (endpointSuffix:string, params? : URLSearchParams, accessToken?:string) : Promise <T>{

   
    const res = await fetch(`${this.privateEndpoint}${endpointSuffix}${params ? `?${params}`: ''}`,
      
         {
        cache:'no-cache',
        headers: !accessToken? {'Content-Type' : 'application/json'} :{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${accessToken} `
        } 
      }
    );




    if (!res.ok){
      
    console.log(res.status ,'+' ,res.statusText)
        throw new Error ("failed to retrieve " + endpointSuffix)
    }

    return res.json();

  }



  async httpGetPublic <T> (endpointSuffix : string , params? : URLSearchParams ) : Promise<T>{


    return this.httpGet(`${this.publicEndpoint}${endpointSuffix}`, params );
  
  }

  
 async httpPost <T> (endpointSuffix : string ,body:object, accessToken? : string ) : Promise<T>{

  const res = await fetch(`${this.privateEndpoint}${endpointSuffix}`,
    {
      method:'POST',
      headers: !accessToken? {'Content-Type' : 'application/json'} :{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${accessToken} `
      }, 
      body:JSON.stringify(body)
    }
  );

  if (!res.ok){
      console.log(`${res.status} - ${res.statusText}` )
      if (res.status === 403) {
        throw new AccesDeniedError("user has no valid credentials")
      }

      throw new Error ("failed to post " + endpointSuffix)
  }



  return res.json();
}


async  httpPostPublic <T> (endpointSuffix : string ,body:object ) : Promise<T>{


  return this.httpPost(`${this.publicEndpoint}${endpointSuffix}`, body );


}

}


