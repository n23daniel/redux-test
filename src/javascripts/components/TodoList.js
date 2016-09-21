import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
	Row,
	Col,
	Panel,
	Checkbox,
	FormControl
} from 'react-bootstrap';
import classNames from 'classnames';

import * as TodoActions from '../actions/todos';

export class TodoList extends Component {
	toggleChecked (todo) {
		this.props.setTodoChecked(todo);
	}

	handleNewTodo (e) {
		if (e.charCode === 13) {
			this.props.addTodo({
				id: Date.now(),
				name: e.target.value,
				checked: false
			});
			e.target.value = '';
		}
	}

	removeTodo (todo) {
		this.props.removeTodo(todo);
	}

	render () {
		console.log(this.props);

		return <div className="container">
			<Row>
				<Col xs={6} xsOffset={3}>
					<Panel
						className="mt-50"
						header={'To-dos'}
						bsStyle="info">
						<div>
							<FormControl
								type="text"
								placeholder="Add To-do"
								onKeyPress={this.handleNewTodo.bind(this)}>
							</FormControl>
						</div>
						<div>
							{this.props.todos.variants.map((todo, index) => {
								const iconClass = classNames({
									'fa': true,
									'mr-5': true,
									'fa-square-o': !todo.checked,
									'fa-check-square-o': todo.checked
								});
								return <div key={index}
									className="mt-10 mb-10 justify-between">
									<div onClick={this.toggleChecked.bind(this, todo)}
										className="pointer">
										<i className={iconClass}
											style={{width: '15px'}}></i>
										{todo.name}
									</div>
									<i className="fa fa-trash pointer"
										onClick={this.removeTodo.bind(this, todo)}></i>
								</div>
							})}
						</div>
					</Panel>
				</Col>
			</Row>
		</div>
	}
}

function mapStateToProps (state) {
	return {...state};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		...TodoActions
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
