"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

type FormData = {
    query : string
}


type SearchBarProps = {
     initialQuery : string | undefined
}

export default function SearchBar({initialQuery} : SearchBarProps){

    const router  = useRouter()
     
    const {register,handleSubmit,setValue} = useForm<FormData>(
        {defaultValues: {
            query : initialQuery
        }}
    )


    useEffect(()=>{
        
        setValue( "query",initialQuery ?? "")

    },[initialQuery,setValue])

    
   
    const onSubmit = (data : FormData)=>{
        
        router.push(`/?query=${data.query?? ""}&type=hash`)
    }
    
    return(
        <>
        
            <form className=" flex  w-full" onSubmit={handleSubmit(onSubmit)}  >

            <input {...register("query")} className=" flex-grow   mb-4 mr-4 rounded bg-gray-50 border border-gray-200" type="text" placeholder="buscar #"/> 

            <button className="button-primary" onSubmit={handleSubmit(onSubmit)}>Buscar</button>
            </form>
        

        </>
    )
}