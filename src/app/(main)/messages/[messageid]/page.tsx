import MessagePost from "@/components/messages/MessagePost";
import Message from "@/components/messages/message";
import messagesApi from "@/services/messages/messages.service";
import Image from "next/image";
import MessagePageContainer from "./page.container";
import { headers } from "next/headers";
import userApi from "@/services/users/user.service";

export default async function message({
  params,
}: {
  params: { messageid: string };
}) {
  const repliesPagePromise = messagesApi.getMessagesReplies(
    params.messageid,
    0,
    10
  );
  const messagePromise = messagesApi.getMessage(params.messageid);

  const [repliesPage, message] = await Promise.all([
    repliesPagePromise,
    messagePromise,
  ]); // perfomance


  const accessToken = headers().get('x-social-access-token') ?? null;


  const currentUser = accessToken?  await userApi.getMeInternal(accessToken) : undefined;

  return (
    <main className="mt-2 h-full flex flex-col  bg-gray-200 p-8">
     <MessagePageContainer repliesPage={repliesPage} message={message} parentId={params.messageid} currentUser={currentUser}></MessagePageContainer>
    </main>
  );
}
