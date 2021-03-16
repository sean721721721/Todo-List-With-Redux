/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TrashButton from './TrashButton';
import DoneButton from './DoneButton';

const removeTaskAction = tasks => {
    return { type: 'REMOVE_TASK', tasks }
}

const Item = props => {
    const { done, title } = props.tasks;
    let tasks = useSelector(state => state.data);
    
    const itemDiv = useRef(null);
    const titleSpan = useRef(null);
    const iconDiv = useRef(null);
    const dispatch =useDispatch();
    
    const removeTask = () => {
        tasks.splice(props.index, 1);
        dispatch(removeTaskAction(tasks));
    }

    const checkTask = () => {
        tasks[props.index].done = true;
        dispatch(removeTaskAction(tasks));
    }

    // const handleMouseOver = () => {
    //     iconDiv.current.style.cursor = 'pointer';
    // }

    useEffect(() => {
        setTimeout(() => {
            itemDiv.current.classList.add('active');
            titleSpan.current.classList.add('active');
            iconDiv.current.classList.add('active');
        }, 0);
    })

    return (
        <div ref={itemDiv} className={`${done ? 'done' : 'wait'}-item`}>
            <span ref={titleSpan}>{title}</span>
            <div ref={iconDiv} className="item_icons">
                <TrashButton task={title} handleRemove={removeTask} />
                { !done && <DoneButton task={title} handleCheck={checkTask} />}
            </div>
        </div>
    )
}

export default Item;