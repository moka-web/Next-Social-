
import FAQsection from "@/components/faq/FAQsection";
import faqApi from "@/services/faqs/FAQ.service";


export default async function FaqPage({params} : {params : {slug:String}}) {

    const faqPages = await faqApi.getfAQPages();
    const faqPage = faqPages.data.find(page =>page.attributes.slug === `/${params.slug}`)


  return (
    <>
    
    <main>
        <FAQsection sections={faqPages.data}  />
      <section>
        <h1>{faqPage?.attributes.title}</h1>
        <p>{faqPage?.attributes.body[0].children[0].text}</p>
      </section>
    </main>
    </>
  );
}
