import exploreApi from "@/services/explore/explore.service";
import { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MessageHashtag from "./MessageHashtag";

type MessageListProps = {
  initialPage: PageType<TrendingHashtag>;
};

export default function MessageHashtagList({ initialPage }: MessageListProps) {
  
  const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage);

  const [hashtags, setHastags] = useState<TrendingHashtag[]>(initialPage.content);


  const fetchData = async () => {
    const pageNumnber = page.pagination.page + 1;
    const response = await exploreApi.getTrendingHashtags(pageNumnber, 5);

    setPage(response);

    setHastags([...hashtags, ...response.content]);
  };

  const refresh = async () => {
    const response = await exploreApi.getTrendingHashtags(0, 5);

    setPage(response);
    setHastags(response.content);
  };


  return (
    <>
      <InfiniteScroll
        dataLength={hashtags.length} //This is important field to render the next data
        next={fetchData}
        hasMore={!page.pagination.last}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>as visto todo mi joven padawan</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>
            &#8595; arrastra hacia abajo para refrescar
          </h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; suelta para refrescar</h3>
        }
      >
        {hashtags.map((hash, i) => {
          return (
            <MessageHashtag hash={hash} key={`explore-hash-${i}` }></MessageHashtag>
          );
        })}
      </InfiniteScroll>
    </>
  );
}