import React from 'react';
import { InputTasksForm } from '../InputTasksForm';

class InputTask extends React.Component {
  render() {
    return (
      <div>
        <div className="inputTaskTitle">
          <input
            type="checkbox"
            className="taskChk"
          />
          <input
            type="text"
            className="taskTitle"
            placeholder="Type Something Here..."
          />
          <i className="far fa-star fa-lg icon" />
          <i className="fas fa-pen fa-lg icon icon_edit" />
          <InputTasksForm closeAdd={this.props.closeAdd} />
        </div>
      </div>
    );
  }
}

export { InputTask };
