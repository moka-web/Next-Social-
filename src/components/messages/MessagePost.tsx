"use client"
import message from "@/app/(main)/messages/[messageid]/page";
import { useMessages } from "@/contexts/message.context";
import messagesApi from "@/services/messages/messages.service";
import { UserType } from "@/types/user.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


type messagePostProps = {
  parentId?:string
  currentUser?: UserType 
}
type FormData = {
  message: string;
  parentId? : string


};




export default function MessagePost({parentId,currentUser } : messagePostProps) {
  const {postMessage} = useMessages();

  const { register, handleSubmit,resetField,setFocus } = useForm<FormData>();
  
  const router = useRouter();


  useEffect(()=>{
    setFocus("message")
  },[setFocus])

  const onSubmit = async (data : FormData)=>{
    await postMessage(data.message, parentId )
    
    resetField("message")
    setFocus("message")
}
  
function toLogin(): void {
  router.push('/login');
  router.refresh();
    }

  if (!currentUser) {

   

    return  (
              <div className=" mt-4 mb-4 flex flex-col items-center text-center justify-center">
                <h3 className=" mb-4">Inicia tu Sesion para escribir un mensaje ! </h3>
                   <button onClick={()=>toLogin()}  type="submit" className=" font-semibold  w-fit button-primary   hover:bg-blue-400 hover:text-white">
                        Iniciar Sesion
                    </button>
              </div>
            )
  }

  return (
    <div className="mb-4  w-full ">
      <div className=" p-4 gap-2 flex w-full">
        <div className=" mr-4 h-[2.5rem]  rounded-full text-center font-bold ">
          <Image
            className="  object-cover rounded-full "
            alt="user image"
            width={60}
            height={60}
            src={currentUser.photoUrl}
          />
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder="¿que estas pensando ?"
              rows={4}
              {...register("message",{required:true}) }
              className=" resize-none w-full mb-4 rounded bg-gray-50 border border-gray-200"
            
            ></textarea>
            <div className="flex justify-end">
              <button type="submit" className=" mt-4 uppercase font-semibold  button-primary   hover:bg-blue-400 hover:text-white">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
