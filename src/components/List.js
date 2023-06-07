import React, {useState} from 'react'

const List = ({item, handleDelete, id, handleEdit, isDarkMode}) => {
  const [check, setCheck] = useState(false);
    
  const lineThrough = () => {
      setCheck((previousValue) => {
          return !previousValue
      })
  }

  return (
    <div className='items-center 
        flex justify-between 
        mb-2 lg:pl-4 lg:pr-4
        pl-2 pr-2'
    >
      <div className='w-96'>
        <li className='justify-center 
            lg:text-base text-xs 
            lg:hover:font-bold 
            lg:hover:cursor-pointer 
            lg:hover:text-lg' 
          onClick={lineThrough} 
          style={{textDecoration : check ? 'line-through' : null}}
        > 
        {item} 
        </li>
      </div>
      <div className='flex lg:gap-5 gap-2'>
        <button className={
            `lg:h-7 h-6 btn 
            bg-[#fdcb6e]
            hover:bg-[#ffa600] 
            lg:text-base text-xs 
            font-semibold rotate-1 
            rounded-tl-md rounded-tr-xl 
            rounded-bl-xl rounded-br-md p-1 
            ${isDarkMode===false ? 'light' : 'dark'}`
          }
          type='button' 
          onClick={() => handleEdit(id)}
        > 
        edit 
        </button>
        <button className={
            `lg:h-7 h-6 btn 
            bg-[#fdcb6e] 
            hover:bg-[#ffa600] 
            lg:text-base text-xs 
            font-semibold rotate-1 
            rounded-tl-md rounded-tr-xl 
            rounded-bl-xl rounded-br-md p-1 
            ${isDarkMode===false ? 'light' : 'dark'}`
          }
          type='button' 
          onClick={() => handleDelete(id)}
        > 
        delete 
        </button>
      </div>
    </div>
  );
}

export default List