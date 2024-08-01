// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useAuthContext } from '../Context/AuthContext';


const handleInputErrors=({fullName,email,username,password,confirmPassword,gender})=>{
    if(!fullName|| !username || !email || !password || !confirmPassword ||!gender){
        toast.error("Please fill all Feilds");
        return false
    }
    if(password !==confirmPassword){
        toast.error("Password do not Match")
        return false
    }
    if(password.length <8){
        toast.error("Password must be at least 8 characters")
        return false
    }

    return true
}
const useSignup = () => {
    const [loading,setLoading]= useState(false);
    const{setAuth} = useAuthContext();

    const signup = async({fullName,email,username,password,confirmPassword,gender})=>{
        const success = handleInputErrors({fullName,username,email,password,confirmPassword,gender})
        if(!success)
            return

        setLoading(true);
        
        try {
            const res = await fetch("http://localhost:3001/api/auth/signUp",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({fullName,email,username,password,confirmPassword,gender})
            })

            const data = await res.json();

            
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("users", JSON.stringify(data)); // Corrected this line

            setAuth(data);
            toast.success("Account Created Successfully")

        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
}

    return {signup,loading}

}

export default useSignup