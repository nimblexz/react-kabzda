import React, {useReducer} from "react";

export default UncontrolledAccordion;
type AccordionPropsType = {
    titleValue: string


}
export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const set_collapsed = 'SET-COLLAPSED'
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case set_collapsed:
            return  {...state,collapsed:!state.collapsed};


        default :
            return state
    }


}

function UncontrolledAccordion(props: AccordionPropsType) {


    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: set_collapsed})
            }}/>
            {/*  <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={() => {
            props.onClick()
        }}>---{props.title}---</h3>
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




