// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
const useGetConversations = () => {
    const [conversations, setConversations] = useState([])
    const [loading, setLoading] = useState(false);
  
    useEffect(()=>{
        const getConversations = async ()=>{
            setLoading(true);
            try {
                const res = await fetch("http://localhost:3001/api/users/getUsers");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error)
                }
                setConversations(data)
                
            } catch (error) {
                toast.error(error.message);
            }
            finally{
                setLoading(false);
            }
        }

        getConversations();
    },[])

    return {conversations,loading}
};

export default useGetConversations