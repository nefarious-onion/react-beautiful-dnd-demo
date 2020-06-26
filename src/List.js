import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';


const List = ({ list, tasks }) => {

    const getListStyle = isDraggingOver => ({
        backgroundColor: isDraggingOver ? 'rgba(135, 213, 222, .3)' : 'rgba(101, 157, 163, 1)',
    })

    const taskList = tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)

    return (
        <div className='listview'>
            <h3>{list.title}</h3>
            <Droppable droppableId={list.id}>
                {(provided, snapshot) => (
                    <div
                        className='list-container'
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {taskList}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </div>
    );
}

export default List;
