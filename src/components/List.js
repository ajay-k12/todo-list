import React, {useState} from 'react'

const List = ({item, handleDelete, id, handleEdit, isDarkMode}) => {
  const [check, setCheck] = useState(false);
    
  const lineThrough = () => {
      setCheck((previousValue) => {
          return !previousValue
      })
  }

  return (
    <div className='items-center flex justify-between m-2 pl-2 pr-2'>
      <div className='w-96'>
        <li className=' justify-center text-md border-dashed hover:font-bold hover:cursor-pointer hover:text-lg' 
          onClick={lineThrough} 
          style={{textDecoration : check ? 'line-through' : null}}
        >
          {item}
        </li>
      </div>
      <div className='flex gap-5'>
        <button className={`h-7 btn bg-[#fdcb6e] hover:bg-[#ffa600] text-md font-semibold rotate-1 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md p-1 ${isDarkMode===false ? 'light' : 'dark'}`}
          type='button' 
          onClick={() => handleEdit(id)}
        >
          edit
        </button>
        <button className={` h-7 btn bg-[#fdcb6e] hover:bg-[#ffa600] text-md font-semibold rotate-1 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md p-1  ${isDarkMode===false ? 'light' : 'dark'}`}
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