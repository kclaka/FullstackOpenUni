import React, { useState } from 'react'
import Person from './components/Person'
import Phone from './components/Phone'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const [newPhoneNumber, setNewPhone] = useState('')

  const [filterterm, setFilterTerm] = useState('')

  const addNote = (event) =>{
    event.preventDefault()

    const personObject = {
      name: newName,
      phone: newPhoneNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
    
  
  }

  
  
  const handlenameChange = (event) =>{

    persons.forEach(person => {
      if(person.name.toLowerCase() === event.target.value.toLowerCase()){
        alert(`${event.target.value} is already in the phonebook`)
        setNewName('')
      }else{
        setNewName(event.target.value)
        
      }
    }) 

  }

  const handlephoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterTerm(event.target.value)
  }

  const filtered = persons.filter(person => person.name.toLowerCase().includes(filterterm))

  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newName={newName} search={filterterm} onFilter={handleFilter}/>
      <hr/>
      <form onSubmit={addNote}  >
        <div>
          name: <input value={newName} onChange={handlenameChange}/>
        </div>
        <div>number: <input value={newPhoneNumber} onChange={handlephoneChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <hr/>
      <h2>Numbers</h2>

          <div>
          {filtered.map((person, i) => 
            <div key={i + 10}>
            <Person key={i} name={person.name}/> <Phone key={i + 1} phone={person.phone}/>
            </div>
          )}

          

          </div>    
    </div>
  )
}

export default App