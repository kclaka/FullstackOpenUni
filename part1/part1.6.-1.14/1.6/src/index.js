import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({click, text}) =>{
  return(
    <button onClick={click}>{text}</button>
  )
}

const Display = ({heading}) =>{
  return(
    <div>
      <h1>{heading}</h1>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      
      <Display heading={"Give Feedback"}/>
      
      <Button click={()=>setGood(good + 1)} text={"good"}/>
      <Button click={()=>setNeutral(neutral + 1)} text={"neutral"}/>
      <Button click={()=>setBad(bad + 1)} text={"bad"}/>

      <Display heading={"statistics"}/>
      <p>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad}
      </p>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)