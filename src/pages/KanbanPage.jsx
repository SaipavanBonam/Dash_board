import React from 'react';
import { KanbanBoard } from 'react-kanban-dnd';

const initialBoard = {
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: 'task-1', title: 'Task 1: Do something' },
        { id: 'task-2', title: 'Task 2: Learn something' },
        { id: 'task-3', title: 'Task 3: Complete assignment' },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: 'task-4', title: 'Task 4: Develop feature' },
        { id: 'task-5', title: 'Task 5: Fix bugs' },
        { id: 'task-6', title: 'Task 6: Review code' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: 'task-7', title: 'Task 7: Deploy application' },
        { id: 'task-8', title: 'Task 8: Write documentation' },
        { id: 'task-9', title: 'Task 9: Conduct tests' },
      ],
    },
  ],
};

const KanbanPage = () => {
  return <KanbanBoard initialBoard={initialBoard} />;
};

export default KanbanPage;
