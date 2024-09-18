// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>Aucune tâche à afficher</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;


