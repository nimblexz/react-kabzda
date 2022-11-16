import React, {useMemo, useState} from "react";
import {Counter} from "./ReactMemo";

export const DifficultCountExample2 = () => {
    const [a, setA] = useState(6)
    const [b, setB] = useState(5)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;

        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            result for a:{resultA}
        </div>
        <div>
            result for b:{resultB}
        </div>
    </>
}


export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
export const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    console.log('fddf')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dima', 'valera', 'kerer'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[users])
    const adduser=()=>{
        setUsers([...users,'katerina' + new Date().getTime()])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={()=>adduser()}></button>
        {counter}
        <Users users={newArray}/>
    </>
}
