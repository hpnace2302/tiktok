import React from 'react'
import Layout from './components/layout'
import Header from './components/header'
import ListTodo from './components/listTodo'
import InputTodo from './components/input'
import Button from './components/button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: 1,
      todo: []
    }
  }

  getNameTodo = (e) => {
    let nameTodo = e.target.value
    console.log(nameTodo);
  }
  handleClick = (e) => {
    this.setState({
    })
  }

  render() {
    return (
      <>
        <Layout>
          <Header/>
          <ListTodo/>
          <InputTodo change={this.getNameTodo}/>
          <Button click={this.handleClick}>Add</Button>
        </Layout>
      </>
    )
  }
}

export default React.memo(App)