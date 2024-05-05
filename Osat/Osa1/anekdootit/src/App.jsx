import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getMaxIndex(arr) {
  const max = Math.max(...arr)
  var maxIndex = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      maxIndex = i
    }
  }
  console.log("max i" + maxIndex)
  return maxIndex
}

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [votes, setVote] = useState(new Uint8Array(anecdotes.length));


  const nextAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  }
  const maxVotes = getMaxIndex(votes)

  const voteAnecdote = (i) => {
    console.log('here ' + i)
    const copy_votes = [...votes]
    copy_votes[i] += 1
    setVote(copy_votes)
    console.log('after update ' + votes)
  }

  console.log('before update ' + votes)
  console.log('max votes' + maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br></br>
      has {votes[selected]} votes <br></br>

      <Button handleClick={() => voteAnecdote(selected)} text="vote" />
      <Button handleClick={() => nextAnecdote()} text="next anecdote" />

      <h1>Anecdote with most votes</h1>
      {anecdotes[maxVotes]} <br></br>
      has {votes[maxVotes]} votes
    </div>
  )
}

export default App
