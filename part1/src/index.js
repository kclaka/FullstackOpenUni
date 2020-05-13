/* import React from 'react'
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
      <Part part={props.name} excercise={props.excer}/>
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
  const course ={
    name:'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10, 
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

    
  } 
 
  
  

  return (
    <div>
      <Header name = {course.name}/>
      <p>
        <Content name= {course.parts[0].name} excer={course.parts[0].exercises}/>
        <Content name= {course.parts[1].name} excer={course.parts[1].exercises}/>
        <Content name= {course.parts[2].name} excer={course.parts[2].exercises}/>
      </p>
      <p><Total count = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) */