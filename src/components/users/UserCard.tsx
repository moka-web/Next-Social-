import Link from "next/link";
import Image from "next/image";
import { BaseUser, TrendingUserType } from "@/types/user.types";
import { PropsWithChildren } from "react";

type userCardProps = PropsWithChildren & {
  user: BaseUser | TrendingUserType;
  layout: UserCardLayout;
};

export enum UserCardLayout {
  HORIZONTAL,
  VERTICAL,
}

const divClasses = {
  [UserCardLayout.HORIZONTAL]: `flex justify-between `,
  [UserCardLayout.VERTICAL]: `flex flex-1 flex-col`,
};

const linkClasses = {
    [UserCardLayout.HORIZONTAL]: `text-md  text-gray-600 cursor-pointer`,
    [UserCardLayout.VERTICAL]: ` text-md  text-gray-600 cursor-pointer`,
  };
  


export default function UserCard({ user, layout, children }: userCardProps) {
  
    return (
    <div className=" p-4 gap-2  border  border-gray-400  bg-gray-100 m-4  rounded ">
      <div className="flex ">
        <div className=" mr-4 rounded-full bg-blue-400 text-center font-bold ">
          <Image
            className=" h-full w-full object-cover rounded-full "
            alt={user.name}
            width={40}
            height={40}
            src={user.photoUrl}
          />
        </div>
        <div className={`${divClasses[layout]} w-full `}>
          <h4 className="font-semibold">{user.name}</h4>

          <div className="" >
            <Link  className={`${linkClasses[layout]} `} href={`/users/${user.username}`}>
     
              <h5 className="text-[0.8rem]">@{user.username}</h5>
            </Link>
          </div>
          
        </div>
      </div>
      <div className="ml-16 ">
      {children}
      </div>
       
    </div>
  );
}
