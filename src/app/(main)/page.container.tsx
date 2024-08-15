   "use client"
    import SearchBar from "@/components/search/SearchBar"
    import MessagePost from "@/components/messages/MessagePost"
    import MessageFeed from "@/components/messages/MessageFeed"
    import { MessageType } from "@/types/message.types";
    import { PageType } from "@/types/pagination.types";
    import { MessageProvider } from "@/contexts/message.context";
    import { UserType } from "@/types/user.types";
    
    
    type PageContainerProps={
        initialQuery?: string;
        messageResponse : PageType<MessageType>
        currentUser?: UserType   
    }


    export default function IndexPageContainer ({initialQuery,messageResponse,currentUser}:  PageContainerProps ){
    return (
        
        <>
        <MessageProvider  initialPage={messageResponse}  >
            <SearchBar initialQuery={initialQuery}/>
            <MessagePost currentUser={currentUser}/>
            <MessageFeed /> 
        </MessageProvider>
        </>
    
    )
}