import UsersLayout from '@/app/(main)/layout';
import Menu from '@/components/menu/Menu';
import Message from '@/components/messages/message';
import type { Meta, StoryObj } from '@storybook/react';
import { title } from 'process';




const meta = {
    title: 'Layout/Users',
    component: UsersLayout ,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    
  } satisfies Meta<typeof UsersLayout>;



export default meta 

type Story = StoryObj<typeof meta>;

   
const links = [ {title : 'Inicio' , href : "/" } , {title :' Explorar' , href : "/explorar"} , {title : 'Perfil' , href : "/mi-perfil"}  ]
     

export const Primary: Story = {
    args: {
      
      children : <> ACA VA EL CONTENIDO</>
    },
  };
