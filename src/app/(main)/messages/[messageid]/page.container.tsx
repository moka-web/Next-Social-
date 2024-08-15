"use client";

import Message from "@/components/messages/message";
import MessageList from "@/components/messages/MessageList";
import MessagePost from "@/components/messages/MessagePost";
import { MessageProvider, useMessages } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import message from "./page";
import { UserType } from "@/types/user.types";

type MessagePageProps ={
    repliesPage : PageType<MessageType>;
    message : MessageType;
    parentId?: string
    currentUser?:UserType
}


const MessageContainer = ()=>{
    const {message} = useMessages();
    if (!message) {
        return <></>
    }
    return <section className="border">
        <Message message={message}></Message>
    </section>
} 


export default function MessagePageContainer({repliesPage,message,parentId,currentUser }:MessagePageProps) {
  return (
    

        <MessageProvider initialPage={repliesPage} initialMessage={message}>
            
            <MessageContainer/>

      <section>
        <MessagePost parentId={parentId} currentUser={currentUser} />
      </section>

      <section>
        <div className="mb-10">
          {repliesPage.content.length >= 1 ? (
            <span className=" border-b-2 border-blue-300">Replies...</span>
          ) : (
            <span className=" border-b-2 border-blue-300">
              Aun no hay respuestas !!{" "}
            </span>
          )}
        </div>
            <div>
                <MessageList/>
            </div>
      </section>
      </MessageProvider>

  );
}
