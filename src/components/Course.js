import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h2><b>{props.course}</b></h2>
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
        <p><b>Total of {total} exercises</b></p>
      </div>
    )
  
  }

const Course = ({course}) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course