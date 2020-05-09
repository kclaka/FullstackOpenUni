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
      <Part part= {'Fundamentals of React'} excercise={10}/>
      <Part part= {'Using props to pass data'} excercise={7}/>
      <Part part= {'State of a component'} excercise={14}/>
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
  //const part1 = 'Fundamentals of React'
  const exercises1 = 10
  //const part2 = 'Using props to pass data'
  const exercises2 = 7
  //const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <p>
        <Content/>
      </p>
      <p><Total count = {exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))