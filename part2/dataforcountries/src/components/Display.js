import React from 'react'


const DisplayLang = (props) => {
    return(
        <>
            {props.language.map((lang, i) =>(
                <ul key={i}>
                    <li>
                    {lang.name}</li>
                </ul>
            
        ))}
        </>
        


    )
    
}

    
    
        
        
    

    

const Display = (props) => 
    props.data.map((item, i)=> (
        <div key={i}>
            <span>
                <h1>{item.name}</h1>
            </span>

            <span>
                <>Capital: {item.capital}</><br></br>
                <>Population: {item.population}</><br></br>
                <p>Languages: </p>
                <DisplayLang language={item.languages}/>
                <img src={item.flag} alt="flag of country" width="300" height="200" ></img>
            </span>
                 
            
        </div>
    ))


        

        

        
  

export default Display