/* eslint-disable no-unused-vars */
import React from 'react';

const TrashButton = props => {
    const { task, handleRemove } = props;

    return (
        <div className="wait_item_icons_trash">
            <i className="far fa-trash-alt" data-text={task} onClick={handleRemove}></i>
        </div>
    )
}

export default TrashButton;