import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <button className="delete" type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  )
}
export default TodoItem
