import React from 'react';
import './Button1.css';

export default function Button1(props){
    // Allow button to change size?
    return(
        <button class='b-secondary w-button' style={{}}>
            {props.children}
        </button>
    )
}