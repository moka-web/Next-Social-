import { Config } from "tailwindcss";



const config : Config ={
    content:[
        './src/pages/**/*.{js,ts,tsx,mdx}',
        './src/components/**/*.{js,ts,tsx,mdx}',
        './src/stories/**/*.{js,ts,tsx,mdx}',
        './src/app/**/*.{js,ts,tsx,mdx}'
        
    ],
    theme:{
        extend:{}
    },
    fontSize:{
        xs:'14px',
        sm:'16px',
        md:'18px',
        lg:'20px',
        xl:'24px',
        '2xl':'42px'
    }
}


export default config;