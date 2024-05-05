import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

  )
}

const Statistics = (props)  => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (

      <table>
        <tbody>
      <StatisticsLine text="good" count={props.good} />
      <StatisticsLine text="netural" count={props.neutral} />
      <StatisticsLine text="bad" count={props.bad} />
      <StatisticsLine text="all" count={props.all} />
      <StatisticsLine text="average" count={props.average} />
      <StatisticsLine text="positive" count={props.positive} />
      </tbody>
      </table>

  )
}


const StatisticsLine = (props)  => {

  return (

      <tr>
        <td>{props.text} </td>
        <td>{props.count}</td>
      </tr>

  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbacks, setCount] = useState(0)
  const [sum, setSum] = useState(0)

  const goodClick = () => {
    console.log('good click')
    setGood(good + 1)
    setCount(feedbacks + 1)
    setSum(sum + 1)
  }

  const neutralClick = () => {
    console.log('neutral click')
    setNeutral(neutral + 1)
    setCount(feedbacks + 1)
  }

  const badClick = () => {
    console.log('bad click')
    setBad(bad + 1)
    setCount(feedbacks + 1)
    setSum(sum - 1)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => goodClick()} text="good"/>
      <Button handleClick={() => neutralClick()} text="neutral"/>
      <Button handleClick={() => badClick()} text="bad"/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={feedbacks}
        average={sum / feedbacks} positive={good / feedbacks * 100 + ' %'}
      />

    </div>
  )
}

export default App
