import ExploreTrending from "@/components/explore/ExploreTrending";
import ExploreUsers from "@/components/explore/ExploreUsers";
import Menu from "@/components/menu/Menu";
import exploreApi from "@/services/explore/explore.service";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { headers } from "next/headers";
import userApi from "@/services/users/user.service";

export default async function UsersLayout({ children }: PropsWithChildren) {
  const LINKS = [
    { title: "Inicio", href: "/" },
    { title: " Explorar", href: "/explore" },
    { title: "Perfil", href: "/profile" },
  ];


  const accessToken =   headers().get('x-social-access-token') ?? null;
  
  console.log(accessToken)
  const hashesPromise = await exploreApi.getTrendingHashtags(0,3);

  const exploreUsersPromise = accessToken ?  await exploreApi.getMyFollowRecomendations(0,5,accessToken) : await exploreApi.getFollowRecomendations(0,5);

  const [ hashes , exploreUsers] = await Promise.all([hashesPromise, exploreUsersPromise])


  return (
    <>
    <div className=" h-[100%] grid grid-cols-12 gap-4 px-4" >
      <div className="col-span-2" >
        <Menu links={LINKS}></Menu>
      </div>
      <main className="col-span-6" >{children}</main>

      <div className="col-span-4 flex flex-col gap-4" >
        <div className="mb-4">
        <ExploreTrending hashes={hashes.content}/>
        </div>
        <div className="mb-4">
        <ExploreUsers users={exploreUsers.content} ></ExploreUsers>
        </div>
        <Link href={"/faq"}>
        <div className="link-primary">
          Preguntas frecuentes 
        </div>
        </Link>
      </div>

    </div>
    </>
  );
}
