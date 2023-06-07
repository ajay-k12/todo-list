import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import DarkModeToggle from 'react-dark-mode-toggle';
import './components/styles.css'
import ZoomTodo from "./components/zoom-todo/ZoomTodo";

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
    const [isEdit, setIsEdit] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState( false);
    const [isInputEmpty, setIsInputEmpty] = useState({inputIsEmpty: ''});
    const [addButtonClicked, setAddButtonClicked] = useState(false);
    const [zoomTodo, setZoomTodo] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);
    const [isSaveInputEmpty, setIsSaveInputEmpty] = useState({inputIsEmpty: ''});


    const toggleButton = () => {
        if(isDarkMode === true){
            setIsDarkMode(false)
            document.body.className = 'light';
        }
        else{
            setIsDarkMode(true)
            document.body.className = 'dark';
        }
    }

    const handleChange = (e) => {
            setInput(e.target.value);
    }

    const handleClick = (e) => {
        if(!input)
        {
            setAddButtonClicked(true);
            setIsInputEmpty({inputIsEmpty: 'Please write something'});
        }
        else 
        {
            setAddButtonClicked(false);
            setList((previousValue) => {
                return [...previousValue, { id : uuidv4(), name : input, isEditing: false }]
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
        setZoomTodo(true);
        const newItem = list.find((item) => {
            return item.id===id
        })
        setInputValue(newItem.name)
        setIsEdit(id)
    }

    const handleSave = (id) => {
        if(!inputValue){
            setSaveButtonClicked(true)
            setIsSaveInputEmpty({inputIsEmpty: 'Please write something'});
        }
        else {
            setList(list.map((item) => {
                if(item.id === id){
                    return {...item, name: inputValue}
                }
                return item
                }))
            setSaveButtonClicked(false)
            setZoomTodo(false)
        }
    }

    // add data to local storage 
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(list))
    }, [list])


    return (
    <>
        {zoomTodo && 
            <ZoomTodo 
                handleSave={handleSave} 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
                isEdit={isEdit} 
                saveButtonClicked={saveButtonClicked} 
                isSaveInputEmpty={isSaveInputEmpty} 
                isDarkMode={isDarkMode}
            />
        }
        <div className= {`p-10 ${isDarkMode===false ? 'light' : 'dark'}`}>
            <div className='toggleButton'>
                <DarkModeToggle 
                    size={50} 
                    className='togButton' 
                    checked={isDarkMode} 
                    onChange={toggleButton} 
                    speed={3}
                />
            </div>
            <div className={`
                    container 
                    no-scrollbar 
                    overflow-y-scroll 
                    m-10 mx-auto 
                    max-w-[650px] min-h-[500px]
                    max-h-[500px] bg-[#f1f5f8]
                    shadow-2xl rounded-xl 
                    bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')]
                    ${isDarkMode===false ? 'light' : 'dark'}`
                }
            >
                <Header 
                    isDarkMode={isDarkMode}
                />
                <Input 
                    handleChange={handleChange}
                    handleClick={handleClick}
                    input={input}
                    isDarkMode={isDarkMode}
                    isInputEmpty={isInputEmpty}
                    addButtonClicked={addButtonClicked}
                />
                { list.map((item) => (
                    <List 
                        item={item.name} 
                        key={item.id} 
                        handleDelete={handleDelete} 
                        id={item.id}
                        handleEdit={handleEdit}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </div>
        </div> 
    </> 
    
    )
}

export default App;
