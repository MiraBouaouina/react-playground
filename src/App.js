import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person.js'
class App extends Component {
  state = {
    persons1: [ //tableau des objets
      { id: "1", name: "Lina", age: "20" },
      { id: "2", name: "Amira", age: "21" }
    ],
    persons2: [
      { id: "3", name: "Céline", age: "10" },
      { id: "4", name: "Mounir", age: "9" }
    ],
    showPersons: true

  }

  changeNameHandler = (event, person) => {
    let newPersons = null
    if (this.state.persons1.includes(person)) {
      newPersons = [...this.state.persons1]
      const index = newPersons.indexOf(person)
      newPersons[index].name = event.target.value
      this.setState({ //changer le contenu de persons
        persons1: newPersons
      })
    }
    else {
      newPersons = [...this.state.persons2]
      const index = newPersons.indexOf(person)
      newPersons[index].name = event.target.value
      this.setState({ //changer le contenu de persons
        persons2: newPersons
      })

    }
  }
  showPersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  movePersonHandler = (person) => {
    if (this.state.persons1.includes(person)) {
      let newPersons = [...this.state.persons1]
      let newPersons2 = [...this.state.persons2, person]
      const index = newPersons.indexOf(person)
      newPersons.splice(index, 1)//supp un obj du tab

      this.setState({ //changer le contenu de persons
        persons1: newPersons,
        persons2: newPersons2
      })
    } else {
      let newPersons = [...this.state.persons1, person]
      let newPersons2 = [...this.state.persons2]
      const index = newPersons2.indexOf(person)
      newPersons2.splice(index, 1)//supp un obj du tab

      this.setState({ //changer le contenu de persons
        persons1: newPersons,
        persons2: newPersons2
      })
    }
  }

  removePersonHandler = (person) => {
    let newPersons = null
    if (this.state.persons1.includes(person)) {
      newPersons = [...this.state.persons1]
      const index = newPersons.indexOf(person)
      newPersons.splice(index, 1)//supp un obj du tab
      this.setState({ //changer le contenu de persons
        persons1: newPersons
      })
    } else {
      newPersons = [...this.state.persons2]
      const index = newPersons.indexOf(person)
      newPersons.splice(index, 1)//supp un obj du tab
      this.setState({ //changer le contenu de persons
        persons2: newPersons
      })
    }
  }

  render() {
    let personsComponents1 = null
    let personsComponents2 = null
    if (this.state.showPersons) {// init true
      personsComponents1 = (
        <div>
          <h2>Liste A</h2>

          {this.state.persons1.map((person) => {// map boucler sur une 'person'
            return (//creation du Person
              <Person //les attributs et fcts
                name={person.name}
                age={person.age}
                remove={() => { this.removePersonHandler(person) }}//arrow fct
                changed={(event) => { this.changeNameHandler(event, person) }}
                key={person.id}
                move={() => { this.movePersonHandler(person) }}
              />
            )
          })}
        </div>)
      personsComponents2 = (
        <div>
          <h2>Liste B</h2>
          {this.state.persons2.map((person) => {// map boucler sur une 'person'
            return (//creation du Person
              <Person //les attributs et fcts
                name={person.name}
                age={person.age}
                remove={() => { this.removePersonHandler(person) }}//arrow fct
                changed={(event) => { this.changeNameHandler(event, person) }}
                key={person.id}
                move={() => { this.movePersonHandler(person) }}
              />
            )
          })}
        </div>
      )

    }

    return (
      <div className='App'>
        <button onClick={this.showPersonsHandler}> Toggel Persons </button>
        <button onClick={this.changeColorHandler}> Change color</button>

        <div className='lists'>
          <div className='list'>
            {personsComponents1}
          </div>
          <div className='list'>
            {personsComponents2}
          </div>
        </div>

      </div>

    )
  }
}
export default App