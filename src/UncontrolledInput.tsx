import {ChangeEvent, useRef, useState} from "react";

/*export const UncontrolledInput=()=>{
    const [value,setValue]=useState('')
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{const actualValue=e.currentTarget.value;
        setValue(actualValue)
    }
    return <div>
        <input onChange={onChange}/>
        {value}
    </div>
}*/
/*
export const UncontrolledInput=()=>{
    const [value,setValue]=useState('')
    const inputRef=useRef<HTMLInputElement>(null)
    const save=()=>{
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <div>
        <input ref={inputRef}/><button onClick={save}>save</button>-actualValue:{value}
    </div>
}*/

export const ControlledInput=()=>{
    const [parentValue,setParentValue]=useState('')
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
}


export const ControlledCheckbox=()=>{
    const [trues,setTrues]=useState(true)
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>setTrues(e.currentTarget.checked)
    return <input type='checkbox' checked={trues} onChange={onChange}/>
}
export const ControlledSelect=()=>{
    const [trues,setTrues]=useState<string | undefined>('4')
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>setTrues(e.currentTarget.value)

    return <select value={trues} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>minsk</option>
        <option value={'2'}>moscow</option>
        <option value={'3'}>ufa</option>
        <option value={'4'}>samara</option>

    </select>

}
