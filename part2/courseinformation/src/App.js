import React from 'react'
import Course from './components/Course'
import Parts from './components/Parts'



const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  let total = 0
  course.parts.forEach(
    part => total += part.exercises
  )

  

  return (
    <div>
      <Course name={course.name} />
      <div>
        {course.parts.map(
          part =><Parts key={part.id} part={part.name} excercise={part.exercises}/>
        )}
      </div>

      <p><b>total of {total} exercises</b></p>
      
    </div>
  )
}

export default App