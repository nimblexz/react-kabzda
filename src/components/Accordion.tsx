import React from "react";

export default Accordion;
type AccordionPropsType = {
    titleValue: string
    collapsed: true | false
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
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


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}




