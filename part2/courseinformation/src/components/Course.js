import React from 'react'


const Heading = ({name}) => <h1>{name}</h1>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Data = ({parts}) =>(
    <>
        {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
        ))}
    </>
)

const Course = ({course}) =>{
    const total = course.parts.reduce((prev, next) =>
    ({exercises: prev.exercises + next.exercises}))

    return(
        <>
            <Heading course={course.name}/>
            <Data parts= {course.parts}/>
            <b>Total of {total.exercises} exercises</b>
        </>
    )
}


export default Course