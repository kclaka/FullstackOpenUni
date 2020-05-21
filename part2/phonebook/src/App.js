import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNote = (event) =>{
    event.preventDefault()
    
    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlenoteChange = (event) =>{
    setNewName(event.target.value)
  }

  
  
  
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}  >
        <div>
          name: <input value={newName} onChange={handlenoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
          {persons.map((person, i) => 
            <Person key={i} name={person.name}/>
          )}
    </div>
  )
}

export default App