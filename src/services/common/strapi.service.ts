import URLSearchParams from "url"

const API_URL = "http://localhost:1337/api"







export async function strapiGet (endpoint : string , params? : URLSearchParams ) : Promise<T>{


    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}`: ''}`,{
      headers:{
        'Authorization':`Bearer ${process.env.CMS_STRAPI_TOKEN}`
      }
    });

    if (!res.ok){
        throw new Error ("failed to retrieve IN STRAPI " + endpoint)
    }

    return res.json();

}




