import React, {useState} from "react";

export const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('fdggfd')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
export const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dima', 'fdfs', 'gfdgf'])
    const adduser=()=>{
        setUsers([...users,'katerina' + new Date().getTime()])
    }
    console.log(users)
    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={adduser}></button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}