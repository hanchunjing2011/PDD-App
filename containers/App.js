import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
// import { dispatch } from '../redux/store/store'
import { addTodo } from '../redux/actions/actions'
// import todoDB from '../dao/todoItem'


@connect((state) => {
  return {
    todos: state.todos
  }
})

export default class App extends Component {
  render(){
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}


App.propTypes = {
  children: PropTypes.element.isRequired
}

