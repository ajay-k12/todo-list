import React, {useState} from 'react'

const List = ({item, handleDelete, id, handleEdit}) => {
    const [check, setCheck] = useState(false);
    
    const lineThrough = () => {
        setCheck((previousValue) => {
            return !previousValue
        })
    }

  return (
    <div className='flex justify-between m-2'>
      <div>
        <li className='text-md border-dashed' 
          onClick={lineThrough} 
          style={{textDecoration : check ? 'line-through' : null}}
        >
          {item}
        </li>
      </div>
      <div className='flex gap-2'>
        <button className='bg-[#fdcb6e] text-md font-semibold rotate-1 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md p-1' 
          type='button' 
          onClick={() => handleEdit(id)}
        >
          edit
        </button>
        <button className='bg-[#fdcb6e] text-md font-semibold rotate-1 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md p-1' 
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