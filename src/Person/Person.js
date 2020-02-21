import React from 'react'
import './Person.css'
const person = (props) => {// arrow function components
    return (
        <div className="Person">
            <p onClick={props.remove} >I'm {props.name} and I am {props.age} yo</p>
            <input onChange={props.changed} />

        </div>
    )

}

export default person