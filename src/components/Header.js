import React from "react";

const Header = ({isDarkMode}) => {
  return (
    <div className="flex
          items-center
          justify-center 
          pb-5 pt-5 m-2"
    >
        <p className={
            `header 
            ${isDarkMode===false ? 'light' : 'dark'} 
            bg-[#ff2e7b] p-1 
            rotate-2 font-bold
            pl-3 pr-3 
            rounded-tl-md 
            rounded-tr-xl 
            rounded-bl-xl 
            rounded-br-md`
          }
        >
            ToDo App
        </p>
    </div>
  )
}

export default Header