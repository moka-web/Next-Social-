import Link from "next/link"
import PostCounter from "../counters/PostCounter"
import { TrendingHashtag } from "@/types/hash.types";

type Hastagprops = {
    hash:TrendingHashtag;
  };


export default function MessageHashtag ( {hash}: Hastagprops ){

    return <>
            
                <div> 
                    <Link href={`/?query=${hash.hash?.replace("#", "")?? '' }&type=hash`}>
                      <h4 className=" p-1 font-bold cursor-pointer">{hash.hash}</h4>
                    </Link>
                    <PostCounter count={hash.count}></PostCounter>
                </div>
    
        </>
}