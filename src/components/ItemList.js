/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';


const ItemList = props => {
    const { type, tasks } = props;

    return (
        <div className={`${type}-list`}>
            {tasks.map((task, index) => <Item key={index} tasks={task} index={index} />)}
        </div>
    )
}

export default ItemList;