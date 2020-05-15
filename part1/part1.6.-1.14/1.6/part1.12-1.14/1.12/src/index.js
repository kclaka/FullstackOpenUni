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

const DisplayVotes = ({votes}) =>{
  return(
    `has ${votes} votes`
  )
}


const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  // eslint-disable-next-line
  const [vote, setVote] = useState(0)

  const points = { 0: 1, 1: 3, 2: 4, 3: 2, 4:5, 5:6, }
  const score = { ...points }
  console.log(score[selected])

  const HandleVotes = () =>{
    const voteIncrease = () =>{
      setVote(score[selected] += 1)
    }

    return voteIncrease
  }
  
 

  return (
    <div>
      <Display heading={"Anecdotes of the Day"}/>
      {props.anecdotes[selected]}<br></br>
      <DisplayVotes votes={vote}/><br></br>
      <button onClick={ HandleVotes()}>vote</button><button onClick= { () => setSelected(Math.floor(Math.random()*anecdotes.length)) } > next anecdotes</button>

      <Display heading={"Anecdotes with most votes"}/>
      {props.anecdotes[selected]}<br></br>
      <DisplayVotes votes={vote}/><br></br>
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