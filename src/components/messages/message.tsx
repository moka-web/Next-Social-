"use client"
import { MessageType } from "@/types/message.types";


import UserCard, { UserCardLayout } from "../users/UserCard";
import RepliesCounter from "../counters/RepliesCounter";
import { useRouter } from "next/navigation";

type messageProps = {
  message: MessageType;
};


export default function Message({ message }: messageProps) {
  const router = useRouter()


  return   <UserCard layout={UserCardLayout.HORIZONTAL}  user={message.user}>
    <div className="flex flex-col">
      <p>
        {message.message}
      </p>
          <div className="flex justify-end">
              <RepliesCounter onClick={()=> router.push(`/messages/${message.id}` )} count={message.repliesCount}></RepliesCounter>
          </div>
   
    </div>
    
    </UserCard>
}
