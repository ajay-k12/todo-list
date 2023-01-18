import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid"

// to get data from local storage //
const getLocalItems = () => {
    let list = localStorage.getItem('lists')
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return []
    }
}

const App = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState(getLocalItems());
    const [toggle, setToggle] = useState(true);
    const [isEdit, setIsEdit] = useState(null);

    const handleChange = (e) => {
            setInput(e.target.value);
    }

    const handleClick = (e) => {
        if(!input)
        {

        }
        else if(input && !toggle) 
        {
            setList(
                list.map((item) => {
                    if(item.id === isEdit){
                        return {...item, name: input}
                    }
                    return item
                })
                
            )
            setToggle(true)
            setInput("")
            setIsEdit(null)
        } 
        else 
        {
            setList((previousValue) => {
                return [...previousValue, { id : uuidv4(), name : input }]
            })
            e.preventDefault();
            setInput("");
        }
    }

    const handleDelete = (id) => {
        setList((previousValue) => {
            return previousValue.filter((item) => {
                return id!==item.id
            })
        })
    }

    const handleEdit = (id) => {
        const newItem = list.find((item) => {
            return item.id===id
        })
        setToggle(false)
        setInput(newItem.name)
        setIsEdit(id)
    }

    // add data to local storage 
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(list))
    }, [list])


    return (
    
    <div className='bg-[#ffeaa7] h-screen p-10'>
        <div className="m-10 mx-auto max-w-[650px] min-h-[500px] bg-[#f1f5f8] shadow-2xl rounded-xl bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')]">
            <Header />
            <Input 
                handleChange={handleChange}
                handleClick={handleClick}
                input={input}
                toggle={toggle}
            />
            { list.map((item) => (
                <List 
                item={item.name} 
                key={item.id} 
                handleDelete={handleDelete} 
                id={item.id}
                handleEdit={handleEdit}
                />
            ))}
        </div>
    </div>  
    
    )
}

export default App;
