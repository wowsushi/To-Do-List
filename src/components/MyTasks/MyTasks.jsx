import React from 'react';
import { AddTask } from '../AddTask';
import { TodoLists } from '../TodoLists';

class MyTasks extends React.Component {
  render() {
    return (
      <div className="inputTasksForm">
        <AddTask />
        <TodoLists />
      </div>
    );
  }
}

export { MyTasks };
