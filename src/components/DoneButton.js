import React from 'react';

const DoneButton = props => {
    const { task, handleCheck } = props;

    return (
        <div className="wait_item_icons_done">
            <i className="fas fa-check-circle" data-text={task} onClick={handleCheck}></i>
        </div>
    )
}

export default DoneButton;