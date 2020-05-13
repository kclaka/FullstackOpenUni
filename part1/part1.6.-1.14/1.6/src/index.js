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

const Statistics = (props) =>{
  
  if (props.all === 0){
    return(
      <div>
      <h1>{props.title}</h1>
      <p>No feedback given</p>
      </div>
      
    )
  }
  return(
    <div>
    <h1>{props.title}</h1>
      <p>
      good {props.good} <br></br>
      neutral {props.neutral} <br></br>
      bad {props.bad} <br></br>
      all {props.all} <br></br>
      average {props.avergae} <br></br>
      positive {props.positive} % 
      </p>
      
      
      
        
     
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let all = good + neutral + bad
  let avgerage = all/3
  let positive = (good/all) * 100

  return (
    <div>
      
      <Display heading={"Give Feedback"}/>
      
      <Button click={()=>setGood(good + 1)} text={"good"}/>
      <Button click={()=>setNeutral(neutral + 1)} text={"neutral"}/>
      <Button click={()=>setBad(bad + 1)} text={"bad"}/>

      <Statistics title={"Statisitcs"} good={good} neutral={neutral} 
                        bad={bad} all={all} avergae={avgerage} positive={positive}/> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)