import FAQcard from "@/components/faq/FAQcard";
import FAQsection from "@/components/faq/FAQsection";
import faqApi from "@/services/faqs/FAQ.service";
import Link from "next/link";

export default async function FaqPage() {

  const faqPages = await faqApi.getfAQPages();

  return (
    <main>
        <FAQsection sections={faqPages.data} />
    </main>
  );
}
