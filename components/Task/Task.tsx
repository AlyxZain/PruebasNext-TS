/** @format */

import React from 'react';
import { TaskForm } from '../TaskForm/TaskForm';

export const Task = () => {
  return (
    <main id='task'>
      <TaskForm />
      <section className='wrapper_list'>
        <div className='list-header'>
          <h2>Task</h2>
        </div>
      </section>
    </main>
  );
};
