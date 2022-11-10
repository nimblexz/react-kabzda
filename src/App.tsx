import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating";
import Accordion from "./components/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./UncontrolledInput";
import {Select} from "./components/Select/Select";
import {Example1} from "./components/ReactMemo";

function App() {
    const callback=(value:number)=>alert(`чувак с айдишником ${value} кликнул`)
    let [RatingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)
    let [value,setValue]=useState('')
    return (
        <div className={'App'}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"User"}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Rating value={RatingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[
                           {title: 'Dima', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Emil', value: 3}]}
                       onClick={callback}
            />
            <ControlledInput/>
            <ControlledCheckbox/>
            {/*<ControlledSelect/>*/}
            <Select onChange={setValue} value={value} items={[
                {value:'1',title:'Minsk'},
                {value:'2',title:'Moscow'},
                {value:'3',title:'Kiev'}
            ]}/>
            <Example1/>
            {/*<Accordion titleValue={"User"} collapsed={false} />*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
