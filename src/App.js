import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person.js'
class App extends Component {
  state = {
    persons: [ //tableau des objets
      { id: "aze", name: "Lina", age: "20" },
      { id: "azr", name: "Amira", age: "21" },
      { id: "abz", name: "Céline", age: "10" },
      { id: "abc", name: "Mounir", age: "9" }
    ],
    showPersons: true
  }

  switchNameHandler = () => {
    console.log("Button was clicked!!")
    const newPersons = [...this.state.persons]// les ... pour copier les vals dans le nouv tab des obj
    newPersons[0].name = "Nour"
    this.setState(// key:value car c un objet
      { persons: newPersons }
    )

  }
  changeNameHandler = (event, person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons[index].name = event.target.value
    this.setState({ //changer le contenu de persons
      persons: newPersons
    })

  }
  showPersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })

  }
  removePersonHandler = (person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons.splice(index, 1)
    this.setState({ //changer le contenu de persons
      persons: newPersons
    })

  }

  render() {
    let personsComponents = null
    if (this.state.showPersons) {
      personsComponents = (<div>
        {this.state.persons.map((person) => {// map boucler sur une 'person'
          return (
            <Person
              name={person.name}
              age={person.age}
              remove={() => { this.removePersonHandler(person) }}
              changed={(event) => { this.changeNameHandler(event, person) }}
              key={person.id} />
          )
        })}
      </div>)
    }

    return (
      <div className='App'>
        <h1> Hello World !! </h1>
        <button onClick={this.switchNameHandler} > Switch Name</button>
        <button onClick={this.showPersonsHandler}> Toggel Persons</button>
        {personsComponents}

      </div>

    )
  }
}
export default App