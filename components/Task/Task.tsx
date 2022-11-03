/** @format */

import axios from 'axios';
import React from 'react';
import { TaskForm } from '../TaskForm/TaskForm';

export const Task = (task: any) => {
  return (
    <>
      {/* {console.log('task', task)} */}
      <main id='task'>
        <TaskForm />
        <section className='wrapper_list'>
          <div className='list-header'>
            <h2>Task</h2>
          </div>

          <div className='list_group'>
            <div className='list'>
              <h4> Nuevas</h4>
              <div className='card'>
                <div className='close'>{/* <GrClose /> */}</div>
                <h3>Task Escritorio</h3>
                <h6>01/09/2022 1:00 PM</h6>
                <h5>Sebastian Vargas</h5>
                <button type='button'>Nueva</button>
                <button type='button'>Alta</button>
                <p>
                  {/* {
                      limitString(
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      ).str
                    } */}
                </p>
              </div>
            </div>
            <div className='list'>
              <h4> En proceso</h4>
              <div className='card'>
                <div className='close'>{/* <GrClose /> */}</div>
                <h3>Task Escritorio</h3>
                <h6>01/09/2022 1:00 PM</h6>
                <h5>Sebastian Vargas</h5>
                <button type='button'>Nueva</button>
                <button type='button'>Alta</button>
                <p>
                  {/* {
                      limitString(
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      ).str
                    } */}
                </p>
              </div>
            </div>
            <div className='list'>
              <h4> Finalizadas</h4>
              <div className='card'>
                <div className='close'>{/* <GrClose /> */}</div>
                <h3>Task Escritorio</h3>
                <h6>01/09/2022 1:00 PM</h6>
                <h5>Sebastian Vargas</h5>
                <button type='button'>Nueva</button>
                <button type='button'>Alta</button>
                <p>
                  {/* {
                    limitString(
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      ).str
                    } */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
