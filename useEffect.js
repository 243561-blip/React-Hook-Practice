import React , {useState , useEffect} from 'react'
function dataFetcher(){
    // useState Hook 
    const[data , setData] =   useState([])
    // useEffect Syntax
    useEffect(() => {
        fetch('https://api.example.com/items')
        .then(res => res.json())
        .then(data = setData(data));
    } , []);

    return(
        <ul>
            {data.map(item => <li key = {item.id}>{item.name}</li>)}
        </ul>
    )
}