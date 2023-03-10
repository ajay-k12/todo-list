import React from 'react'

const Input = ({handleChange, handleClick, input, toggle }) => {
  
    

  return (
    <div className='flex items-center justify-between p-5'>
            <input 
              className='p-[0.5rem] rounded-br-[15px] rounded-bl-[5px] rounded-tr-[7px] rounded-tl-[9px] bg-transparent w-[90%] border-dashed' 
              type='text' 
              placeholder='Write Something...' 
              value={input} 
              onChange={handleChange}
            />
            <div>
              <button 
              className='p-1 bg-[#fdcb6e] text-md font-semibold -rotate-2 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md' 
              type='button' 
              onClick={handleClick}
              >
              {toggle ? "add" : "edit" }
              </button>
            </div>
    </div>
  )
}

export default Input