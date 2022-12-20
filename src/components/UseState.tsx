import {useEffect, useState} from "react";

export const UseState =()=>{
    const [counter,SetCounter]=useState(1)
    const [fake,Setfake]=useState(1)
    console.log('render')
    useEffect(()=>{
        console.log('21')
        setInterval(()=>{
            Setfake((state)=>state+1)
    },1)},[])

    return <>
    <button onClick={()=>{SetCounter(counter+1)}}>+</button>
    <div>{counter}</div>
    <div>{fake}</div>
    </>
}