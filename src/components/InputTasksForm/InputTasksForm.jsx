/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { InputName } from '../InputName';

class InputTasksForm extends React.Component {
  render() {
    return (
      <div className="InputTasksForm">
        <div className="InputTask">
          <InputName className="fas fa-calendar-alt" inputName="Deadline" />
          <div className="inputForm">
            <input
              name="date"
              type="date"
              className="inputStyle inputDateTime"
              value={this.props.stateData.date}
              onChange={this.props.changeState}
            />

            <input
              name="time"
              type="time"
              className="inputStyle inputDateTime"
              value={this.props.stateData.time}
              onChange={this.props.changeState}
            />
          </div>

          <InputName className="fas fa-file" inputName="File" />
          <div className="inputForm">
            <input
              name="file"
              type="file"
              className="inputStyle"
              ref={this.props.filebox}
              onChange={this.props.changeState}
            />
            <br />
            <span className="inputStyle">
              {this.props.stateData.file}
            </span>
          </div>

          <InputName className="far fa-comment-dots" inputName="Comment" />
          <div className="inputForm">
            <textarea
              name="commit"
              rows="7"
              cols="55"
              className="inputStyle"
              value={this.props.stateData.commit}
              onChange={this.props.changeState}
            >
              {this.props.comment}
            </textarea>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="addButton cancelButton"
            onClick={this.props.closeAdd}
          >
            Ｘ Cancel
          </button>
          <button
            type="button"
            className="addButton saveButton"
            onClick={this.props.submitTodo}
          >
            ＋ Save
          </button>
        </div>
      </div>
    );
  }
}

export { InputTasksForm };
