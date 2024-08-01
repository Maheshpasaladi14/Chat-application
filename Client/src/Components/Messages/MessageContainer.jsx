// eslint-disable-next-line no-unused-vars
import React from 'react'
import Messages from './Messages'
import Input from './Input'
import NoChatselected from './NoChatselected'

const MessageContainer = () => {
  const noChats = true;
  return (
    <div className='md:min-w-[550px] flex flex-col'>
      {
        noChats ?
          <NoChatselected /> : (
            <>

              <div className=' p-2 bg-slate-50 mb-2'>
                <span className='  text-gray-900 font-bold'>Mahi</span>
              </div>

              <Messages />
              <Input />
            </>
          )
      }
    </div>
  )
}

export default MessageContainer