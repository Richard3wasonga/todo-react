import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const AddTaskForm = ({ todos, setTodos }) => {
	const [newTodo, setNewTodo] = useState({
		title: '',
		completed: false,
	});

	
	async function handleSubmit(e) {
		e.preventDefault();

		const newTask ={
			title: newTodo.title,
			completed: false,
		}

		setTodos([...todos, newTask])

		setNewTodo({title: '', completed: false})
	}

	return (
		<div className="add-task-container">
			<form id="add-task-form" onSubmit={handleSubmit}>
				<Input
					id="task-input"
					placeholder="Add a new task..."
					required
					value={newTodo.title}
					onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
				/>

				<Button id="add-task-btn">
					<i className="fas fa-plus"></i>
				</Button>
			</form>
		</div>
	);
};

export default AddTaskForm;
