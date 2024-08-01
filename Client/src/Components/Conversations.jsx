// eslint-disable-next-line no-unused-vars
import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../Hooks/useGetConversations';

const Conversations = () => {
 const{ conversations}=useGetConversations();
 console.log("Conversations:", conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations