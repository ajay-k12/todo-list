import React from 'react'

const Input = ({handleChange, handleClick, input, isDarkMode, isInputEmpty, addButtonClicked }) => {

  return (
    <div className='pb-5'>
      <form className={
        `flex
         items-center 
         justify-between 
         pl-5 pr-5 pt-5 pb-3`
        }
        method='submit' 
        onSubmit={handleClick} 
      >
        <input className={
            `border-2
            border-pink-500
            p-[0.5rem] 
            rounded-br-[15px] 
            rounded-bl-[5px] 
            rounded-tr-[7px] 
            rounded-tl-[9px] 
            bg-transparent w-[75%] placeholder-pink-400
            ${isDarkMode===false ? 'light' : 'dark'} 
            ${(!input && addButtonClicked) ? 'border-if-input-empty' : ''}`
          }
          type='text' 
          placeholder='Write Something...' 
          value={input} 
          onChange={handleChange}
        />
        <div>
          <button className={
            `btn p-1 
            bg-[#e87fa6] 
            hover:bg-[#ff2e7b] 
            text-md font-semibold
            -rotate-2 rounded-tl-md 
            rounded-tr-xl 
            rounded-bl-xl 
            rounded-br-md  
            ${isDarkMode===false ? 'light' : 'dark'}`
          }
          type='button' 
          onClick={handleClick}
          >
          add 
          </button>
        </div>
      </form>
      {
      (!input && addButtonClicked) && 
      <span className='
        lg:text-sm text-xs 
        flex pl-7 
        text-red-600'> {isInputEmpty.inputIsEmpty} </span>
      }
    </div>
  )
}

export default Input