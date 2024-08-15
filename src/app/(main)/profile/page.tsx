import UserPagesContainerAsync from "@/components/users/UsersPageContainerAsync"
import userApi from "@/services/users/user.service"
import { headers } from "next/headers";
import { NextRequest } from "next/server"





export default async function ProfilePage (){

   const accessToken = headers().get('x-social-access-token') ?? 'undefined';


    const me = await userApi.getMeInternal(accessToken)
  

    return(
         <UserPagesContainerAsync username={me.username}></UserPagesContainerAsync>   
    )
}