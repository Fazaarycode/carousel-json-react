import React from 'react'
import JSCarousel from './JSCarousel'

function Print({state}){
        
    return <div>{
        state.map(val =>{
            return <JSCarousel key= {val.id} stateProp = {val}/>
        })
    }</div>;
}

export default Print;