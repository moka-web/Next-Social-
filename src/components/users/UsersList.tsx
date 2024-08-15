"use client"

import exploreApi from "@/services/explore/explore.service";
import UserCard, { UserCardLayout } from "./UserCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { TrendingUserType, UserType } from "@/types/user.types";
import { PageType } from "@/types/pagination.types";


type userListProps = {
    initialUserPage : PageType<TrendingUserType>
}


export default function UsersList({initialUserPage}: userListProps) {

    const [page,setPage] = useState<PageType<TrendingUserType>>(initialUserPage)

    const [users, setUSers] = useState<TrendingUserType[]>(initialUserPage.content)

    

    const fetchData = async () => {
        const pageNumnber = page.pagination.page + 1;
        const response = await exploreApi.getFollowRecomendations(pageNumnber, 5);
        
        setPage(response);

        setUSers([...users, ...response.content]);

      };
    
      const refresh = async () => {
        const response = await exploreApi.getFollowRecomendations(0, 5);
    
        setPage(response);
        setUSers(response.content);
       
      };



  return (
    <>
      <InfiniteScroll
        dataLength={users.length} //This is important field to render the next data
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
        {users.map((user, i) => {
          return (
            <UserCard
              key={`explore-user-${i}`}
              user={user}
              layout={UserCardLayout.VERTICAL}
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
}
