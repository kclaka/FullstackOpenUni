import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part= {props.part} excercise={props.excercise}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name = {course}/>
      <p>
        <Content part={part1.name} excercise={part1.exercises}/>
        <Content part={part2.name} excercise={part2.exercises}/>
        <Content part={part3.name} excercise={part3.exercises}/>
      </p>
      <p><Total count = {part1.exercises + part2.exercises + part3.exercises}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))