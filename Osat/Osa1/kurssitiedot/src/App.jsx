const Header = (props) => {
  console.log("header toimii")
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log("part toimii")
  return (
    <div>
      <p>
        {props.name} {props.exCount}
      </p>
    </div>
  )
}


const Content = (props) => {
  console.log('content toimii')
  console.log(props)
  console.log("toimiiko muuttuja?")
  const parts2 = props.parts.parts
  console.log(parts2)
  console.log("yllä parts2?")
  return (
    <div>
        <Part name={parts2[0].name} exCount={parts2[0].exercises} />
        <Part name={parts2[1].name} exCount={parts2[1].exercises} />
        <Part name={parts2[2].name} exCount={parts2[2].exercises} />
        {/* <Part name={props.parts[1].name} exCount={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exCount={props.parts[2].exercises} /> */}
    </div>
  )
}


const Total = (props) => {
  const parts2 = props.parts.parts
  const sum = (p1, p2, p3) => {
    return p1 + p2 + p3
  }
  return (
    <div>
      <p>
        Number of exercises {
            sum(parts2[0].exercises,
              parts2[1].exercises,
              parts2[2].exercises,
              )
          }
      </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
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
      <Header course={course}/>
      <Content parts={course}/>
      <Total parts={course} />
    </div>
  )
}

export default App
