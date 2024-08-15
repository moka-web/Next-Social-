

import UserPagesContainerAsync from "@/components/users/UsersPageContainerAsync";




export default async function UserPage({ params}: {params: { username: string };}) {
 
  return(
    <UserPagesContainerAsync username={params.username} ></UserPagesContainerAsync>
  )
};
