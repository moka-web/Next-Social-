import UserTabs from '@/components/users/UserTabs';
import type { Meta, StoryObj } from '@storybook/react';



const meta = {
    title: 'Users/userTab',
    component: UserTabs,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    
  } satisfies Meta<typeof UserTabs>;



export default meta 

type Story = StoryObj<typeof meta>;

const messages = 
[
    {
      name: "Anakin",
      username: "anakin Skywalker",
      message: "mensaje del usuario anacleto ",
      repliesCount: 14,
    },
    {
      name: "Anakin",
      username: "anakin Skywalker",
      message: "mensaje del usuario tomas ",
      repliesCount: 16,
    },
  ]

  const replies = [
    {
      name: "Anakin",
      username: "anakin Skywalker",
      message: "mensaje del usuario anakin ",
      repliesCount: 14,
    },
    {
      name: "Anakin",
      username: "anakin Skywalker",
      message: "dale cornudo ",
      repliesCount: 16,
    },
  ]
    


export const MessageTab: Story = {
    args: {
      messages: messages,
      replies : replies,
    
    },
  };