import React, { useState } from 'react';
import Button from './Button';

const DemonstratingState = () => {
	const [count, setCount] = useState(200);

	let numb = 11;
	const h2 = document.querySelector('.h2');
	function directDOMManipulation() {
		h2.innerText = numb += 1;
	}

	function subtractUsingDirectDOMManipulation() {
		h2.innerText = numb -= 1;
	}

	function stateManipulation() {
		setCount(count + 1);
	}

	function subtractUsingState() {
		setCount(count - 1);
	}

	return (
		<div>
			<h3>Demonstrating React's useState hook</h3>
			<h2 className="h2">{numb}</h2>
			<Button id="add-task-btn" onClick={directDOMManipulation}>
				Add
			</Button>
			<Button onClick={subtractUsingDirectDOMManipulation}>Subtract</Button>

			<h1>{count}</h1>

			<Button id="add-task-btn" onClick={stateManipulation}>
				Add
			</Button>

			<Button id="add-task-btn" onClick={subtractUsingState}>
				Subtract
			</Button>
		</div>
	);
};

export default DemonstratingState;