import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNote = (event) =>{
    event.preventDefault()
  }

  const handlenotChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const personObject = {
    name:persons
  }

  setPersons(persons.concat(personObject))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote} onChange={handlenotChange} >
        <div>
          name: <input value={newName} onChange={handlenotChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map((person, i) => 
            <Person key={i} name={person.name}/>
          )}
        </div>
    </div>
  )
}

export default App