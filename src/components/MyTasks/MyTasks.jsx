import React from 'react';
import { AddTask } from '../AddTask';

class MyTasks extends React.Component {
  render() {
    return (
      <div className="inputTasksForm">
        <AddTask />
      </div>
    );
  }
}

export { MyTasks };
