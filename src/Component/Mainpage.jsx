import React, { useState } from 'react'
import Mealcards from './Mealcards';

function Mainpage() {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("")
    const handleInput = (event) => {
        // console.log(event.target.value);

        setSearch(event.target.value);

    }
    const myFun = async () => {
        if (search == "") {
            setMsg("please Enter something")

        }
        else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            ///it return promise
            // console.log(get);
            const jsonData = await get.json()
            // console.log(jsonData.meals);
            setData(jsonData.meals);
            setMsg("")
        }


    }
    return (
        <>
            <h1 className='head'>Food Recipe App</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type="text" placeholder='Enter Your Dishes' onChange={handleInput} />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 className='error'>{msg}</h4>
                <div>
                    <Mealcards detail={data} />

                </div>
            </div>
        </>
    )
}

export default Mainpage
