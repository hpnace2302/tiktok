const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type)
    console.log(prevState);
    console.log(action);
    const nextState = reducer(prevState, action)

    console.log(nextState);
    console.groupEnd()
    return nextState
  }
}

export default logger;