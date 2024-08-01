// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const Searchinput = () => {
    return (
        <form  className='flex items-center gap-2' >
            <input type="text" placeholder='Search...' className='w-full border
       border-slate-500 rounded-full p-2 text-slate-300' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default Searchinput