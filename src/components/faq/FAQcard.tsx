import Link from "next/link";



type FAQcardProps ={
    label:string;
    href : string
}

export default function FAQcard({label , href} : FAQcardProps){


    return (
        <div>
            <Link className="col-span-3 " href={ `/faq${href}` }>
                <div className=" rounded-lg border border-gray-200 p-4">
                <h3>{label}</h3>
                </div>
            </Link>  
        </div>
        )
      
}




