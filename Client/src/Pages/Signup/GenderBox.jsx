// eslint-disable-next-line no-unused-vars
import React from 'react'

const GenderBox = ({onCheckboxChange,selectedGender}) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text text-white'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-200' 
                    checked={selectedGender==="male"}
                    onChange={()=>onCheckboxChange("male")}/>
                    
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text text-white'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-200'
                    checked={selectedGender==="female"}
                    onChange={()=>onCheckboxChange("female")}/> 
                </label>
            </div>
        </div>
    )
}

export default GenderBox