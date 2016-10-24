import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
	let input

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addTodo(input.value))
				input.value = ''
			}}>
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input className="mdl-textfield__input" type="text" id="sample3" ref={node => { input = node }}/>
					<label className="mdl-textfield__label" for="sample3">Add Todo...</label>
				</div>
				<button type="submit" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
					Add Todo
				</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo)

export default AddTodo