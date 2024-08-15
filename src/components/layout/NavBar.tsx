"use client"
import authApi from "@/services/auth/auth.api";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NavBarProps = {
  logedUsername?: string
}


export default function NavBar ({logedUsername}: NavBarProps){
    
  const router = useRouter();
  
  async function logout (){
   await authApi.logout();
   router.push('/login')
   router.refresh();
  }



    return(
        <header className="w-full  bg-slate-500 h-10 display p-2">
        <nav className="w-full flex justify-between  ">
          <div>
            < Link   href={"/explore"}
              className="px-6  text-blue-200 font-bold  italic " 
               >
                Star-X
                </Link>
          </div>
          <div>
            { logedUsername ?

              <button onClick={()=>{logout()}} className="button-secondary">
                Cerrar Sesion
              </button> : <></>
            }
          </div>
        </nav>
      </header>
    )
}