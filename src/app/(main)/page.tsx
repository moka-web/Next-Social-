
import messagesApi from "@/services/messages/messages.service";

import IndexPageContainer from "./page.container";
import { headers } from "next/headers";
import userApi from "@/services/users/user.service";





export default async function IndexPage({ searchParams} : { searchParams? : {[key:string] : string | undefined }}) {

  
  const accessToken = headers().get('x-social-access-token') ?? null;


  const currentUser = accessToken?  await userApi.getMeInternal(accessToken) : undefined;
  



  const messagesResponse =searchParams?.query? await messagesApi.getMessagesByHash(searchParams?.query,0,10)   :await messagesApi.getMessagesFeed(0, 10);

 
  return (
    <>
      <main className="mt-16">
        <section>
          <IndexPageContainer initialQuery={searchParams?.query} messageResponse={messagesResponse} currentUser={currentUser} ></IndexPageContainer>
        </section>
      </main>
    </>
  );
}
