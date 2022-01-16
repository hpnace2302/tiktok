const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type)
    console.log('prevState: ', prevState);
    console.log('action:', prevState);
    const nextState = reducer(prevState, action)

    console.log('nextState: ', nextState);
    console.groupEnd()
    return nextState
  }
}

export default logger