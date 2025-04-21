import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { API_URL } from '../App';

const AddTaskForm = ({ todos, setTodos }) => {
	const [newTodo, setNewTodo] = useState({
		title: '',
		completed: false,
	});

	
	async function handleSubmit(e) {
		e.preventDefault();

		const tempId = Date.now()

		const newTask ={
			id: tempId,
			title: newTodo.title,
			completed: false,
		}

		setTodos([...todos, newTask])

		setNewTodo({title: '', completed: false})

		try{
			const response = await fetch(API_URL,{
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json',
				},
				body: JSON.stringify(newTask)
			})
			if(!response.ok){
				setTodos(prev => prev.filter(todo => todo.id !== tempId))
				console.error('Failed to save task to server')
			}
		}catch(error){
			setTodos(prev => prev.filter(todo => todo.id !== tempId))
			console.error('Error', error)
		}
	
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
