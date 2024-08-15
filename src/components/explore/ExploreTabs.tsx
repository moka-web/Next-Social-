"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { TrendingHashtag } from "@/types/hash.types";
import { TrendingUserType } from "@/types/user.types";
import UserCard, { UserCardLayout } from "../users/UserCard";
import Link from "next/link";
import PostCounter from "../counters/PostCounter";
import MessageHashtag from "../messages/MessageHashtag";
import { useSearchParams } from "next/navigation";
import UsersList from "../users/UsersList";
import { PageType } from "@/types/pagination.types";
import MessageHashtagList from "../messages/MessageHashtagList";
 
type UserTabsProps ={
    hashtags:PageType<TrendingHashtag>,
    users:PageType<TrendingUserType>,
    initialTabs?: string
}

enum TabView {
    HASHTAG,USERS 
} //repasar esto que no tengo ni idea para que pingo sirve ! 



export default function ExploreTabs({hashtags,users, initialTabs }:UserTabsProps) {

    const searchParams = useSearchParams()

    const [tab , setTab] = useState<TabView>(initialTabs? TabView[initialTabs as keyof typeof TabView] : TabView.HASHTAG);

    useEffect(()=>{
        const type = searchParams.get('type')
        setTab(type ? TabView[type as keyof typeof TabView] : tab)
    },[searchParams,tab])





  return (
    <>
      <div>
        <div className="flex justify-evenly p-8 ">

          <Link href={"/explore?type=HASHTAG"} className={` cursor-pointer mb-4 border-b-4   ${ tab === TabView.HASHTAG ?  'border-blue-600' : ''} font-semibold text-xl`} 
           onClick={()=>{setTab(TabView.HASHTAG)}}>
            Trending
          </Link>
          <Link href={"/explore?type=USERS"} className={` cursor-pointer  mb-4  border-b-4  ${ tab === TabView.USERS ?  'border-blue-600' : ''} font-semibold text-xl`}
          onClick={()=>{setTab(TabView.USERS)}}>
            who to follow! 
            </Link>
        </div>
        
        <div>
          {tab === TabView.HASHTAG && <MessageHashtagList initialPage={hashtags} />}
           { tab === TabView.USERS &&  <UsersList  initialUserPage={users} ></UsersList>
            
          }

        </div>
     
      </div>
    </>
  );
}
