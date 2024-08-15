import ExploreTrending from '@/components/explore/ExploreTrending';
import Menu from '@/components/menu/Menu';
import Message from '@/components/messages/message';
import type { Meta, StoryObj } from '@storybook/react';
import { title } from 'process';




const meta = {
    title: 'explore/explore',
    component: ExploreTrending,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    
  } satisfies Meta<typeof ExploreTrending>;



export default meta 

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
      
        hashes : [{hash:"trending topic 1" , count: 25},{hash:"trending topic 2" , count: 25},{hash:"trending topic 3" , count: 25}]
     
    },
  };


  export const Empty : Story = {
    args: {
      
        hashes : []
     
    },
  };




  export const MoreThan3: Story = {
    args: {
      
        hashes : [{hash:"trending topic 1" , count: 25},{hash:"trending topic 1" , count: 25},{hash:"trending topic 2" , count: 25},{hash:"trending topic 3" , count: 25}]
     
    },
  };