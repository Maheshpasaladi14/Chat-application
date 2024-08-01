// eslint-disable-next-line no-unused-vars
import React from 'react'
import Searchinput from './Searchinput'
import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-200 p-4 flex flex-col'>
        <Searchinput/>
        <div className='divider px-2 '></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default Sidebar