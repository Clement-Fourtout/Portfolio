// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-item">
      {/* Case à cocher pour marquer la tâche comme complétée */}
      <input
        type="checkbox"
        checked={task.completed} // coche si la tâche est complétée
        onChange={() => toggleTaskCompletion(task.id)} // appelle la fonction pour basculer l'état
      />
      
      {/* Le texte de la tâche est barré si elle est complétée */}
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>

      {/* Bouton pour supprimer la tâche */}
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
};

export default TaskItem;
