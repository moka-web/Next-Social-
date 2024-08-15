import InfiniteScroll from "react-infinite-scroll-component";
import Message from "./message";
import { useMessages } from "@/contexts/message.context";




export default  function MessageFeed (){

    const {messages,messagePage, fetchNextPage, refresh  } = useMessages();
   
     


return(
    <>
         <InfiniteScroll
            dataLength={messages.length} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={!messagePage.pagination.last}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>as visto todo mi joven padawan</b>
              </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh={false}
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; arrastra hacia abajo para refrescar
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; suelta para refrescar 
              </h3>
            }
          >
             {messages.map((message, i) => {
            return <Message key={`${i}`} message={message}></Message>;
          })}
          </InfiniteScroll>

    </>
)

}