import Image from "next/image";
import UserTabs from "@/components/users/UserTabs";
import userApi from "@/services/users/user.service";

type UserPagesContainerProps ={
    username: string
}    

export default async function UserPagesContainerAsync ({username}: UserPagesContainerProps ){

    const userPromise = userApi.getUserData(username);
    const userMessagesPromise = userApi.getUSerMessages(username);
    const userMessagesRepliesPromise = userApi.getUserMessagesRplies(username);
    const userFollowesPromise = userApi.getUserFollowes(username);
    const userFollowingsPromise = userApi.getUserFollowings(username);


  const [user, userMessages, userMessagesReplies,userFollowers,userFollowings] = await Promise.all([
    userPromise,
    userMessagesPromise,
    userMessagesRepliesPromise,
    userFollowesPromise,
    userFollowingsPromise
  ]); // perfomance





  return (
    <div className="h-full flex flex-col  bg-gray-200 p-8">
      <div className=" rounded-full w-[8rem] h-[8rem] bg-blue-400 text-center  font-bold ">
        <Image
          className="rounded-full w-[100%] h-[100%] object-cover   "
          width={500}
          height={500}
          priority
          src={user.photoUrl}
          alt="fotoPerfil"
          placeholder="blur"
          blurDataURL="blur"
        />
      </div>
        
      <h2 className="font-bold text-xl">{user.username}</h2>
      <div className="font-semibold text-lg">{user.bio}</div>
      <div>
        <div className="text-lg ">
          {" "}
          <span className="font-bold">{user.followersCount} </span> Seguidores
        </div>
        <div className="text-lg">
          {" "}
          <span className="font-bold"> {user.followingCount} </span> Seguidos
        </div>
      </div>
      <UserTabs
        followers={userFollowers.content}
        followings={userFollowings.content}
        messages={userMessages.content}
        replies={userMessagesReplies.content}
      ></UserTabs>
    </div>
  );
}