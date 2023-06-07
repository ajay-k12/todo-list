import React from 'react'
import './zoom-todo.css'

const ZoomTodo = ({
                  handleSave, inputValue, setInputValue, 
                  isEdit, saveButtonClicked, isSaveInputEmpty, 
                  isDarkMode
                  }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(isEdit)
  }
    

  return (
    <div className={
        `zoom-todo 
        ${isDarkMode===false ? 'light' : 'dark'} 
        flex flex-col 
        justify-center 
        items-center`
      }
    >
      <div className={
          `edit-area 
          ${isDarkMode===false ? 'light' : 'dark'} 
          items-center 
          justify-center 
          bg-[#f1f5f8] 
          bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')]`
        }
      >
          <div className='
              flex items-center 
              justify-center pt-5'
          >
            <form onSubmit={handleSubmit}>
            <input className={
                `edit-input 
                ${isDarkMode===false ? 'light' : 'dark'} 
                bg-transparent border-2 
                p-[0.5rem] rounded-br-[15px] 
                rounded-bl-[5px] rounded-tr-[7px] 
                rounded-tl-[9px] border-black 
                ${(!inputValue && saveButtonClicked) ? 'border-if-input-empty' : ''}`
              } 
              type='text' 
              value={inputValue} 
              placeholder='Edit ToDo...' 
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <button className={
                `edit-btn 
                ${isDarkMode===false ? 'light' : 'dark'} 
                text-center 
                bg-[#fdcb6e] 
                hover:bg-[#ffa600] 
                lg:text-base text-sm 
                font-semibold rotate-1 
                rounded-tl-md rounded-tr-xl 
                rounded-bl-xl rounded-br-md`
              }
              onClick={() => handleSave(isEdit)} 
              type='button' 
            >
            save
            </button>
            </form>
          </div>
          <div className='error-message'>
            { 
              (!inputValue && saveButtonClicked) && 
              <span className='
                lg:text-sm text-xs 
                pl-16 text-red-600'
              >
              {isSaveInputEmpty.inputIsEmpty}
              </span>
            }
          </div>
      </div>
    </div>
  )
}

export default ZoomTodo