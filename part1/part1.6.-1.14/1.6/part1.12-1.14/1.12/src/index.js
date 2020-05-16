import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({heading, anecdotes}) =>{
  return(
    <div> 
      <h1>{heading}</h1>
      {anecdotes}
    </div>
  )
}
// eslint-disable-next-line
const TopVotes = ({votes, annec}) =>{
  let i = votes.indexOf(Math.max(...votes))
  return(
    <div>
      <div>{annec[i]}</div>
      <div>has {votes[i]} votes</div>
    </div>

    
  )
}

// eslint-disable-next-line
const DisplayVotes = (props) =>{
  return(
    `has ${props.votes} votes`
  )
}




const App = (props) => {
  let len = props.anecdotes.length
  // eslint-disable-next-line
  const [selected, setSelected] = useState(0)
  // eslint-disable-next-line
  const [votes, setVote] = useState(Array(len).fill(0))

  // eslint-disable-next-line
  const handleVotes = () => {
    const copy = [...votes]
    console.log(copy)
    copy[selected] += 1
    setVote(copy)
  }

  

  return (
    <div>
      <Display heading={"Anecdotes of the Day"}/>
      {props.anecdotes[selected]}<br></br>
      <DisplayVotes votes={votes[selected]}/><br></br>
      <button onClick={handleVotes}>vote</button>
      
      <button onClick= { () => setSelected(Math.floor(Math.random()*len)) }> next anecdotes</button>

      <Display heading={"Anecdotes with most votes"}/>
      <TopVotes votes={votes} annec={props.anecdotes}/><br></br>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)