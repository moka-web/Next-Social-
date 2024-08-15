const API_URL = "http://localhost:8080/api"
const  API_PUBLIC_URL = `${API_URL}/public`
import { MessageType } from "@/types/message.types"
import { PageType } from "@/types/pagination.types"


import httpinternalapi from "../common/http.internal.service"
import httpexternalapi from "../common/http.external.service"



    class MessagesApi {

       
        postMessage =  async (message: string, parentId?: string ) : Promise <MessageType> =>httpexternalapi.httpPost(`/proxy/messages`, {message : message, parentId : parentId ?? null});


        getMessagesFeed = async (page: number , size: number) : Promise <PageType<MessageType>> =>httpinternalapi.httpGetPublic(`/messages/feed`, new URLSearchParams({page: `${page}`, size: `${size}`}));
        
        getMessagesReplies = async (id:string,page: number , size: number) : Promise <PageType<MessageType>> =>httpinternalapi.httpGetPublic(`/messages/${id}/replies`, new URLSearchParams({page: `${page}`, size: `${size}`}));
        
        getMessage = async (id:string) : Promise <MessageType> =>httpinternalapi.httpGetPublic(`/messages/${id}`);

        getMessagesByHash = async ( hashtag:string, page: number , size: number ) : Promise <PageType<MessageType>> => httpinternalapi.httpGetPublic(`/messages/hash/${hashtag}`,new URLSearchParams({page: `${page}`, size: `${size}`}))
        

    }


const messagesApi = new MessagesApi();
export default messagesApi; 

