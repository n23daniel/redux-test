export function addTodo (todo) {
	return {
		type: 'todos/ADD',
		payload: todo
	}
}

export function removeTodo (todo) {
	return {
		type: 'todos/REMOVE',
		payload: todo
	}
}

export function editTodo (todo) {
	return {
		type: 'todos/EDIT',
		payload: todo
	}
}

export function setTodoChecked (todo) {
	return {
		type: 'todos/SET_CHECKED',
		payload: todo
	}
}
