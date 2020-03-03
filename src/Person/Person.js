import React from 'react'
import './Person.css'
const person = (props) => { // arrow function components
    return (
        <div className="Person">
            <p onClick={props.move} >
                I'm {props.name} and I am {props.age} years old.
            </p>
            <button className="button" onClick={props.remove}> X </button>
            <input onChange={props.changed} />


        </div>
    )

}

export default person