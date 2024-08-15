"use client"
import { MessageType } from "@/types/message.types";
import Message from "../messages/message";
import { useState } from "react";
import Image from "next/image";
import UserCard, { UserCardLayout } from "./UserCard";
import { TrendingUserType } from "@/types/user.types";

type UserTabsProps ={
    messages:MessageType[],
    replies:MessageType[],
    followers:TrendingUserType[],
    followings:TrendingUserType[],
}


enum TabView {
    MESSAGES,REPLIES,FOLLOWERS,FOLLOWING 
} //repasar esto que no tengo ni idea para que pingo sirve ! 



export default function UserTabs({messages,replies,followers,followings}:UserTabsProps) {

    const [tab , setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div>
        <div className="flex justify-evenly p-8 gap-10 ">
          
          <div className={` cursor-pointer mb-4 border-b-4   ${ tab === TabView.MESSAGES ?  'border-blue-600' : ''} font-semibold text-xl`} 
           onClick={()=>{setTab(TabView.MESSAGES)}}>
            Mensajes
          </div>
          
          <div className={` cursor-pointer  mb-4  border-b-4  ${ tab === TabView.REPLIES ?  'border-blue-600' : ''} font-semibold text-xl`}
          onClick={()=>{setTab(TabView.REPLIES)}}>
            Respuestas
          </div>
          
          
          <div className={` cursor-pointer  mb-4  border-b-4  ${ tab === TabView.FOLLOWERS ?  'border-blue-600' : ''} font-semibold text-xl`}
          onClick={()=>{setTab(TabView.FOLLOWERS)}}>
            Seguidores
          </div>
          
          <div className={`  cursor-pointer  mb-4  border-b-4  ${ tab === TabView.FOLLOWING ?  'border-blue-600' : ''} font-semibold text-xl`}
          onClick={()=>{setTab(TabView.FOLLOWING)}}>
            Seguidos
          </div>
          
        </div>
          
        <div>

          {tab === TabView.MESSAGES && messages.map((message, i) => {
            return <Message key={`${i}`} message={message} />;
          })}
           { tab === TabView.REPLIES &&  replies.map((message, i) => {
            return <Message key={`${i}`} message={message} />;
          })}
          
          {tab === TabView.FOLLOWERS && followers.map((user, i) => {
            return <UserCard key={`user-followers-${i}`} layout={UserCardLayout.VERTICAL}  user={user}></UserCard>;
          })}
           { tab === TabView.FOLLOWING &&  followings.map((user, i) => {
            return <UserCard key={`user-following-${i}`} layout={UserCardLayout.VERTICAL}  user={user}></UserCard>;
          })}

        </div>
     
      </div>
    </>
  );
}
