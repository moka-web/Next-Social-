import Link from "next/link";
import PostCounter from "../counters/PostCounter";
import { TrendingHashtag } from "@/types/hash.types";
import MessageHashtag from "../messages/MessageHashtag";

type ExploreTrendingProps = {
  hashes:TrendingHashtag[];
};

export default function ExploreTrending({ hashes }: ExploreTrendingProps) {
    
    if (!hashes || hashes.length === 0) return <></>
     
  
    return (
    <>
      <div
        className="flex flex-col justify-center bg-gray-200 rounded-lg p-10 py-4 " 
        
      >
        <h2>Trending</h2>

            { hashes.slice(0,3).map((hash,index)=>{

                return(

                  <MessageHashtag hash={hash} key={`trending-hash${index}`} />
                )
            })}
            {hashes.length >= 3 && 
                <Link href={"/explore?type=HASHTAG"}>
                
                <h5 className="text-center  p-2 link-primary cursor-pointer "> 
                    ver mas ...
                </h5>
                </Link>
                }

      </div>
    </>
  );
}
