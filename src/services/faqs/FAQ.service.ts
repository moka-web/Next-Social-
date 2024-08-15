
import { strapiGet } from "../common/strapi.service"
import { FAQPageType } from "@/types/faq.types"
import { StrapyResultType } from "@/types/strapi.types"

// http://localhost:8080/api/public/explore/trending

    class FAQApi {

       getfAQPages = async () : Promise<StrapyResultType<FAQPageType>> =>strapiGet(`/faq-pages`);


      
    }


const faqApi = new FAQApi();

export default faqApi; 
