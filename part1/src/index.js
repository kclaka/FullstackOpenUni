import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.count}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <p>
        <Content part = {part1} excercise = {exercises1}/>
      </p>
      <p>
      <Content part = {part2} excercise = {exercises2}/>
      </p>
      <p>
      <Content part = {part3} excercise = {exercises3}/>
      </p>
      <p><Total count = {exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))