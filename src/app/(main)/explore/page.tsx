import ExploreTabs from "@/components/explore/ExploreTabs";
import exploreApi from "@/services/explore/explore.service";



export default async function ExplorePage({ searchParams} : { searchParams? : {[key:string] : string | undefined }}) {

    const hashesPromise = exploreApi.getTrendingHashtags(0,20);
    const usersPromise = exploreApi.getFollowRecomendations(0,5); 

    const [hashes, users] = await Promise.all([hashesPromise,usersPromise])

    

  return (
    <>
      <main>
        <section>

            <ExploreTabs users={users}  hashtags={hashes}  initialTabs={searchParams?.type}></ExploreTabs>
                
        </section>
      </main>
    </>
  );
}
