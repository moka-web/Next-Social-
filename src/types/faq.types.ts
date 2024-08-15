

export type FAQPageType ={
    "id":number,
    "attributes":{
        "title":string,
        "body": [
            {
                "type": string,
                "children": [
                    {
                        "type": string,
                        "text": string
                    }
                ]}]
            ,
        "slug":string
    }
}


