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
  return(
          <tr>
            <td>{props.text}</td><td>{props.value}</td>
          </tr> 
      
      
  )
}

const NoFeedBack = () => {
  return(
    <p>No Feedback given</p>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let all = good + neutral + bad
  let avgerage = all/3
  let positive = ((good/all) * 100).toString() + "%"

  if (all === 0){
    return(
      <div>
        <Display heading={"Give Feedback"}/>
        <Button click={()=>setGood(good + 1)} text={"good"}/>
        <Button click={()=>setNeutral(neutral + 1)} text={"neutral"}/>
        <Button click={()=>setBad(bad + 1)} text={"bad"}/>
        <NoFeedBack/>
        </div>
      
    )
  }else{
    return (
      <div>
      <Display heading={"Give Feedback"}/>
      <Button click={()=>setGood(good + 1)} text={"good"}/>
      <Button click={()=>setNeutral(neutral + 1)} text={"neutral"}/>
      <Button click={()=>setBad(bad + 1)} text={"bad"}/>
  
        <Display heading={"Statistics"}/>
        <table>
          <tbody>
            <Statistics text={"good"} value={good} /> 
            <Statistics text={"neutral"} value={neutral} /> 
            <Statistics text={"bad"} value={bad} /> 
            <Statistics text={"all" } value={all} /> 
            <Statistics text={"avgerage" } value={avgerage} /> 
            <Statistics text={"positive"} value={positive}/>
          </tbody>
        </table>
        
      </div>
    )
  }

  
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)