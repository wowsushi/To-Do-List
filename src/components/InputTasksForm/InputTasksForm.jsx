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
              type="date"
              className="inputStyle inputDateTime"
              value={this.props.date}
            />

            <input
              type="time"
              className="inputStyle inputDateTime"
              value={this.props.time}
            />
          </div>

          <InputName className="fas fa-file" inputName="File" />
          <div className="inputForm">
            <input
              type="file"
              className="inputStyle"
            />
            <br />
            <span className="inputStyle">
              {this.props.fileName}
            </span>
          </div>

          <InputName className="far fa-comment-dots" inputName="Comment" />
          <div className="inputForm">
            <textarea rows="7" cols="55" className="inputStyle">
              {this.props.comment}
            </textarea>
          </div>
        </div>

        <div>
          <button type="button" className="addButton cancelButton" onClick={this.props.closeAdd}> Ｘ Cancel</button>
          <button type="button" className="addButton saveButton"> ＋ Save</button>
        </div>
      </div>
    );
  }
}

export { InputTasksForm };
