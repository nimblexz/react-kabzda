import React from "react";
import {reducer, set_collapsed, StateType} from "./UncontrolledAccordion";
test('reducer',()=>{
    const state:StateType={
        collapsed:false
    }
    const newState=reducer(state,{type:set_collapsed})
    expect(1).toBe(1)
    expect(newState.collapsed).toBe(true)
    expect(state.collapsed).toBe(false)
})
test('reduceree',()=>{
    const state:StateType={
        collapsed:true
    }
    const newState=reducer(state,{type:'st_coapsed'})
    expect(newState.collapsed).toBe(true)

})