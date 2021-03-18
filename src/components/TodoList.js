/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import ItemList from './ItemList';
import './style.css';

const addTaskAction = (task) => {
    return { type: 'ADD_TASK', task}
}

const TodoList = () => {
    const quantity = 8;
    const [task, setTask] = useState('');
    const tasks = useSelector(state => state.data.slice(0, quantity));
    console.log(tasks);
    const input = useRef(null);

    const dispatch = useDispatch();
    const addTask = (e) => {
        e.preventDefault();
        dispatch(addTaskAction(task));
        console.log('add');
        setTask({title:'', done: false});
        e.target.reset();

    }

    const taskOnChange = e => {
        setTask({title: e.target.value, done: false});
    }

    useEffect(() => {
        input.current.focus();
    });

    console.log('render TodoList');
    return (
        <div className="container">
            <header>To-Do List</header>
            <form onSubmit={addTask}>
                <input ref={input} type="text" onChange={taskOnChange}></input>
                <button type="submit"><i className="fas fa-plus-circle send"></i></button>
            </form>
            <div className="wait-item-list">
                <span>Wait Item<i className="fas fa-list-ul"></i></span>
                <ItemList type="wait" tasks={tasks.filter(task => !task.done)} />
            </div>
            <div className="done-item-list">
                <span>Done Item<i className="far fa-calendar-check"></i></span>
                <ItemList type="done" tasks={tasks.filter(task => task.done)} />
            </div>
        </div>
    )
}

export default TodoList;
