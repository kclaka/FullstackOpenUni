import React, {useEffect, useState} from 'react';
import Search from './components/Search';
import axios from 'axios'
import Display from './components/Display';


function App() {

  const[searchTerm, setSearch] = useState([])
  const[filterTerm, setFilterTerm] = useState('')

  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      const countriesApi = response.data
      setSearch(countriesApi)
    })

  })

  const handleFilter = (event)=>{
    setFilterTerm(event.target.value)

  }

  
  const filterApi = searchTerm.filter(country => country.name.toLowerCase().includes(filterTerm))
 

  return (
    <div className="App">
      <Search handleFilter = {handleFilter}/>

      {
        if(filterApi.Length < 2){
          <Display data={filterApi}/>
        }
      
      }
      
        
      
    </div>
  );
}

export default App;
