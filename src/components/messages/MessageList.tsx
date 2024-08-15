"use client"

import Message from "./message";
import { useMessages } from "@/contexts/message.context";



export default  function MessageList (){

  const {messages} = useMessages();

return(
    <>
         
          {messages.map((message, i) => {
            return <Message key={`${i}`} message={message}></Message>;
          })}
    </>
)

}