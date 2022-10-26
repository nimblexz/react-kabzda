import React from "react";

export default Accordion;
type ItemType={
    title:string
    value:number
}
type AccordionPropsType = {
    titleValue: string
    collapsed: true | false
    onChange: () => void
    items:ItemType[]
    onClick:(value:number)=>void
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>---{props.title}---</h3>
    );
}

type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:number)=>void
}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}




