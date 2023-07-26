import Spam from "./Spam";
import React from 'react';


const Spamalot =({num})=>{
    let lots = []
    for (let i = 0; i < num; i++) {lots.push(<Spam key={i}/>)}
    return lots
}

export default Spamalot

