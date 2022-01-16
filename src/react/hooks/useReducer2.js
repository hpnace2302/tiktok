import React, {useReducer, useRef} from 'react'

// useReducer
// 1. Init state
const initState = {
  job: '',
  jobs: []
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: 'SET_JOB',
    payload
  }
}

const addJob = payload => {
  return {
    type: 'ADD_JOB',
    payload
  }
}

const deleteJob = payload => {
  return {
    type: 'DELETE_JOB',
    payload
  }
}

// 3. Reducer
const reducer = (state, action) => {
  console.log('action ', action);
  console.log('prev state ', state);

  let newState

  switch (action.type) {
    case 'SET_JOB':
      newState = {
        ...state,
        job: action.payload,
      }
      break
    case 'ADD_JOB':
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case 'DELETE_JOB':
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs,
      }
    break
    default: throw new Error('Invalid action')
  }
  console.log(newState)
  return newState
}

// 4. Dispatch


const App = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{padding: 32}}>
      <h1>Todo</h1>
      <input 
        ref={inputRef}
        placeholder="Enter todo..."
        value={job}
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button
        onClick={handleSubmit}
      >Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li 
            key={index}
            onClick={() => dispatch(deleteJob(index))}
          >{job}</li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(App)