import Link from "next/link";
import Image from "next/image";
import PostCounter from "../counters/PostCounter";
import { TrendingHashtag } from "@/types/hash.types";
import { TrendingUserType } from "@/types/user.types";
import UserCard, { UserCardLayout } from "../users/UserCard";

type ExploreUsersProps = {
  users: TrendingUserType[];
};

export default function ExploreUsers({ users }: ExploreUsersProps) {
  if (!users || users.length === 0) return <></>;

  return (
    <>
      <div className="flex flex-col justify-center bg-gray-200 rounded-lg gap-4 p-10 py-4 ">
        <h2>Seguir..</h2>

        {users.slice(0, 4).map((user, index) => {
          return (
           <UserCard key={`user-trending-${index}`} layout={UserCardLayout.VERTICAL}  user={user}></UserCard>
          );
        })}
        {users.length >= 3 && (
          <Link href={"/explore?type=USERS"}>
            <h5 className="text-center  p-2 link-primary cursor-pointer ">
              ver mas ...
            </h5>
          </Link>
        )}
      </div>
    </>
  );
}
