import React, {useState} from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        setList((previousValue) => {
            return [...previousValue, input]
        })
        e.preventDefault();
        setInput("");
    }

    const handleDelete = (id) => {
        setList((previousValue) => {
            return previousValue.filter((item, index) => {
                return index!==id
            })
        })
    }


    return (
    
    <div className='bg-[#ffeaa7] h-screen p-10'>
        <div className="m-10 mx-auto max-w-[650px] min-h-[500px] bg-[#f1f5f8] shadow-2xl rounded-xl bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')]">
            <Header />
            <Input 
                handleChange={handleChange}
                handleClick={handleClick}
                input={input}
            />
            {list.map((item, index) => (
                <List 
                item={item} 
                key={index} 
                handleDelete={handleDelete} 
                id={index}/>
            ))}
        </div>
    </div>  
    
    )
}

export default App;
