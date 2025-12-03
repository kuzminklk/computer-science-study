import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import usePrevious from './hooks/usePrevious';

const FILTER_MAP = {
	All: () => true,
	Active: (task) => !task.completed,
	Completed: (task) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
	// Hooks
	const [tasks, setTasks] = useState(props.tasks);
	const [filter, setFilter] = useState('All');

	// Create list of todos; send props
	const taskList = tasks
		.filter(FILTER_MAP[filter])
		.map((task) => <Todo id={task.id} name={task.name} completed={task.completed}
			key={task.id} onTaskToggle={toggleTaskCompleted} onTaskDelete={deleteTask} onTaskEdit={editTask} />);

	// Create list of filter buttons; send props
	const filterList = FILTER_NAMES.map((name) => (<FilterButton key={name} name={name}
		isPressed={name === filter} onFilterSet={setFilter} />))

	// Create counter of tasks
	const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${taskNoun} remaining!`

	// Refs
	const listHeadingRef = useRef(null);

	// Change focus after delete
	const prevTaskLength = usePrevious(tasks.length)
	useEffect(() => {
		if (tasks.length < prevTaskLength) {
			listHeadingRef.current.focus();
		}
	}, [tasks.length, prevTaskLength]);

	function toggleTaskCompleted(id) {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	function addTask(name) {
		const newTask = { id: nanoid(), name, completed: false };
		setTasks([...tasks, newTask]);
	}

	function deleteTask(id) {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks)
	}

	function editTask(id, newName) {
		const editedTaskList = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, name: newName };
			}
			return task;
		});
		setTasks(editedTaskList);
	}

	return (
		<div className="todoapp stack-large">
			<h1 hidden>TodoMatic</h1>
			<Form onTask={addTask} />
			<div className="filters btn-group stack-exception">
				{filterList}
			</div>
			<h2 id="list-heading" tabIndex='-1' ref={listHeadingRef}>{headingText}</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				{taskList}
			</ul>
		</div>
	);
}

export default App;