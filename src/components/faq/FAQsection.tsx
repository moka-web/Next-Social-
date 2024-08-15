import Link from "next/link";
import FAQcard from "./FAQcard";
import { FAQPageType } from "@/types/faq.types";


type FAQsectionProps ={
  sections: FAQPageType[]
}

export default function FAQsection({sections}: FAQsectionProps){


    return (
        <section>
        <h1 className="mb-4">Preguntas Frecuentes</h1>
        <div className=" cursor-pointer grid grid-cols-12 gap-4 mb-8">
          
          {sections.map((section)=> <FAQcard key={section.attributes.slug}  label={section.attributes.title} href={ section.attributes.slug }  />)}
         
        </div>
      </section>
    )
}
