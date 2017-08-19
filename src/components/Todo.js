import React from 'react'

const Todo = ({ onClick, completed, text }) =>
  <tr>
    <td className="c-todo__list_item"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <span>
        {text}
      </span>
    </td>
  </tr>

export default Todo
