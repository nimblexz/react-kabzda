import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating";
import Accordion from "./components/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [RatingValue, setRatingValue]=useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(true)
    let [switchOn,setSwitchOn]=useState<boolean>(true)
    return (
        <div className={'App'}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"User"}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Rating value={RatingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} />
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
