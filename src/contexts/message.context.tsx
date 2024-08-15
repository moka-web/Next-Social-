import messagesApi from "@/services/messages/messages.service";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { PropsWithChildren,createContext,FC, useContext, Children, useMemo, useState, useCallback, useEffect } from "react";


export type MessageState ={
    message ?:  MessageType;
    messages : MessageType[];
    messagePage : PageType<MessageType>;
    postMessage: (message: string , parentId? : string )=> void;
    fetchNextPage : ()=>void;
    refresh : ()=>void;

}


const MessageContext = createContext<MessageState | undefined >(undefined);


type MessageProviderProps= PropsWithChildren &{
initialPage: PageType<MessageType>;
initialMessage?: MessageType;
}


export const MessageProvider: FC<MessageProviderProps> = 
({initialPage,initialMessage,children}:MessageProviderProps)=>{

    const [messagePage,setMessagePage] = useState<PageType<MessageType>>(initialPage);

    const [messages , setMessages] = useState<MessageType[]>(messagePage.content)


    const [message,setMessage] = useState<MessageType | undefined>(initialMessage);

     useEffect (()=>{
        setMessagePage(initialPage);
        setMessages(initialPage.content);
      },[initialPage])
    

    const postMessage =useCallback( async (textMesssage: string , parentId? : string )=>{

        const response = await messagesApi.postMessage(textMesssage,parentId);
     
        setMessages([response, ...messagePage.content]) 

        if (message && message.id === parentId) {
          setMessage({...message , repliesCount: message.repliesCount + 1})
        }

    },[messagePage,message])


    const fetchNextPage = useCallback(async ()=>{

        const page = messagePage.pagination.page + 1;
        const response = await messagesApi.getMessagesFeed(page,10)
    
        setMessagePage(response);
    
        setMessages([...messages , ...response.content])
        
        },[messagePage.pagination.page, messages])
    
    
    const refresh = useCallback (async ()=>{
    
        
        const response = await messagesApi.getMessagesFeed(0,10)
    
        setMessagePage(response)
        setMessages(response.content)
        
    },[])



    const value = useMemo(()=>({
        message ,
        messages,
        messagePage,
        postMessage,
        fetchNextPage,
        refresh,
    }),[message, messages, messagePage, postMessage, fetchNextPage, refresh])

    return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>


}



 export const useMessages = ():MessageState =>{
    const context = useContext(MessageContext); 
    if (!context) {
        throw new Error (" useMessages must be used within a MessageProvider")
    }
    return context;
}