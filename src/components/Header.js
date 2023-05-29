import React from "react";

const Header = ({checked}) => {
  return (
    <div  className="flex items-center justify-center pb-5 pt-5 m-2">
        <p className={`header ${checked===false ? 'light' : 'dark'} bg-[#fdcb6e] p-1 rotate-2 font-bold pl-3 pr-3 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}>
            ToDo App
        </p>
    </div>
  )
}

export default Header