import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface TaskProps {
    task: {
        id: string;
        content: string;
    }
    index: number;
}

const Task: React.SFC<TaskProps> = ({ task, index }) => {

    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
        backgroundColor: isDragging ? 'rgba(0, 177, 196, .3)' : 'white',
        color: isDragging ? 'white' : 'black',
        ...draggableStyle
    })

    return (
        <Draggable draggableId={task.id} index={index} >
            {(provided, snapshot) => (
                <div 
                    className='task-container'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                >
                    {task.content}
                </div>
            )}
        </Draggable>

    );
}

export default Task;
