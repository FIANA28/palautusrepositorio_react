import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // const-määrittelyt
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  const exercises1 = 10
  // const part2 = 'Using props to pass data'
  const exercises2 = 7
  // const part3 = 'State of a component'
  const exercises3 = 14
  const Part = (props) => {
    return (
      <div>
        <p>
           {props.part} {props.exercises}
        </p>
      </div>
    )
  }
  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  const Content = () => {
    return (
    <div>
        <Part part='Fundamentals of React' exercises={10} />
        <Part part='Using props to pass data' exercises={7}/>
        <Part part='State of a component' exercises={14}/>
    </div>
    )
  }
  const Total = () => {
    return (
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
