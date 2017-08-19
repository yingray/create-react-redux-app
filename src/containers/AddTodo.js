import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    const { props: { dispatch }, state: { input } } = this
    e.preventDefault()
    if (!input.trim()) {
      return
    }
    dispatch(addTodo(input))
    this.setState({ input: '' })
  }

  render() {
    return (
      <form className="c-todo__section" onSubmit={this.handleSubmit}>
        <input className="c-todo__input" type="text" onChange={this.handleChange} value={this.state.input} />
        <button type="submit" className="c-todo__icon">
          <i className="material-icons">assignment_returned</i>
        </button>
      </form>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
