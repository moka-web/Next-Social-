"use client"
import { LinkType } from "@/types/linktype.types"
import Link from "next/link"
import { useRouter } from "next/navigation"


type MenuProps ={
    links: LinkType[]
}



export default function Menu ( {links}: MenuProps){

    const router = useRouter();

    function onGoToLink(href: string) {
        router.push(href)
        router.refresh();
    }

    return(
        <>
        <nav className="  mt-10  flex  h-full   w-full" >
            <ul className="flex flex-col w-full  " >
               
               {links && links.map(( link , index)=>
               
               <li key={`menu-link${index}`}  
                className="p-4 w-full cursor-pointer font-semibold text-2xl hover:bg-blue-400 hover:text-white ">
                <div className="w-full flex" onClick={()=>onGoToLink(link.href)}> {link.title}</div>   
                </li>
               )}
               
                <button className=" mt-4 uppercase font-semibold w-[10rem] button-primary   hover:bg-blue-400 hover:text-white">Publicar</button> 
            </ul>        
        
        </nav >

        </>
    )
}