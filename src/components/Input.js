import React from 'react'

const Input = ({handleChange, handleClick, input, toggle, isDarkMode, isInputEmpty, addButtonClicked }) => {

  return (
    <div className='pb-5'>
      <form method='submit' onSubmit={handleClick} className='flex items-center justify-between pl-5 pr-5 pt-5 pb-3'>
        <input 
          className={`p-[0.5rem] rounded-br-[15px] rounded-bl-[5px] rounded-tr-[7px] rounded-tl-[9px] bg-transparent w-[75%] ${isDarkMode===false ? 'light' : 'dark'} ${(!input && addButtonClicked) ? 'border-if-input-empty' : ''}`}
          type='text' 
          placeholder='Write Something...' 
          value={input} 
          onChange={handleChange}
        />
        <div>
          <button 
          // disabled={!input ? true : false}
          // style={{ opacity: !input ? 0.5 : 1 }}
          className={`btn p-1 bg-[#fdcb6e] hover:bg-[#ffa600] text-md font-semibold -rotate-2 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md  ${isDarkMode===false ? 'light' : 'dark'}`}
          type='button' 
          onClick={handleClick}
          >
          {toggle ? "add" : "edit" }
          </button>
        </div>
      </form>
      {(!input && addButtonClicked) && <span className=' text-sm flex pl-7 text-red-600 '>{isInputEmpty.inputIsEmpty}</span>}
    </div>
  )
}

export default Input