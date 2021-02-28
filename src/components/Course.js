import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    )
}
  
const Content = (props) => {
    console.log(props)
    return(
      <div>
        {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </div>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce(((accumulator, currentValue) => accumulator + currentValue.exercises),0)
    console.log(total)
    return (
      <div>
        <p>Total of {total} exercises</p>
      </div>
    )
  
  }

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course