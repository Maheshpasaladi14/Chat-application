// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderBox from './GenderBox'
import useSignup from '../../Hooks/useSignup'



const SignIn = () => {
    const [inputs,setInputs] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const handleCheckbox=(gender)=>{
        setInputs({...inputs,gender})
    }
    const {  signup } = useSignup();
    const handleSubmit =async(e)=>{
        e.preventDefault()
        console.log(inputs)
        await signup(inputs)
    }
  return (
    <div className='flex items-center justify-center
             flex-col w-[40%] h-[85%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter
              backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                <h1 className='text-2xl font-bold mb-2'>Register</h1>
           
                    <form className=' flex items-center flex-col gap-2'
                     onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered input-accent w-full max-w-xs
                             text-black" 
                             value={inputs.fullName}
                             onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
                       
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered input-accent
                             text-black w-full max-w-xs" 
                             value={inputs.email}
                             onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
                        
                        <input
                            type="text"
                            placeholder="User Name"
                            className="input input-bordered input-accent w-full max-w-xs
                             text-black" 
                             value={inputs.userName}
                             onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
                       
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered input-accent
                             text-black w-full max-w-xs" 
                             value={inputs.password}
                             onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
                        
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input input-bordered input-accent
                             text-black w-full max-w-xs" 
                             value={inputs.confirmPassword}
                             onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>

                        <GenderBox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender}/>    
                        
                        <button className="btn mt-4 bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-
                        sm bg-opacity-50 border border-gray-100 text-white" 
                         type=' submit'>Register</button>
                         <p className='text-sm text-gray-500'>Already have an account? 
                         <Link to={'/login'} className='link link-accent'>Login</Link></p>
                    </form>
                
    </div>
  )
}

export default SignIn