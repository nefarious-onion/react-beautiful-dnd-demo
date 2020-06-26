import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { listData } from './data';
import List from './List';
import './App.css';

const App = () => {
  const [data, setData] = useState(listData);
  console.log('this is the state', data);


  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    const start = data.lists[source.droppableId];
    const finish = data.lists[destination.droppableId];

    if (start === finish) {
      const _taskIds = Array.from(start.taskIds);

      _taskIds.splice(source.index, 1);
      _taskIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        taskIds: _taskIds
      }

      const newData = {
        ...data,
        lists: {
          ...data.lists,
          [newList.id]: newList
        }
      }
      console.log('this is the new data', newData)
      setData(newData);

    } else {
      const startTaskIds = Array.from(start.taskIds);
      const finishTaskIds = Array.from(finish.taskIds);

      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      }
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      }

      const newData = {
        ...data,
        lists: {
          ...data.lists,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      }
      setData(newData);
    }
  }

  const lists = data.listOrder.map(listId => {
    const list = data.lists[listId];
    const tasks = list.taskIds.map(taskId => data.tasks[taskId]);

    return <List key={list.id} list={list} tasks={tasks} />
  })

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div className='container'>
        {lists}
      </div>
    </DragDropContext>
  );
}

export default App;
