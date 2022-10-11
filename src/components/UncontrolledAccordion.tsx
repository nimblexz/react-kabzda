import React, {useState} from "react";

export default UncontrolledAccordion;
type AccordionPropsType = {
    titleValue: string


}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let[collapsed,setCollapsed]=useState(true)

        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
              {/*  <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
                {!collapsed && <AccordionBody/>}
            </div>
        )
    }




type AccordionTitlePropsType = {
    title: string
    onClick:()=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.onClick()}}>---{props.title}---</h3>
    );
}




function AccordionBody() {
    console.log("AccordionBody rendering")

        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }




