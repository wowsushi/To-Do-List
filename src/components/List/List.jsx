import React from 'react';
import { InputTask } from '../InputTask';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: this.props.listData.important,
      complete: this.props.listData.complete,
      editTasks: null,
    };
    this.changeState = this.changeState.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.list = React.createRef();
  }

  changeState(type) {
    switch (type) {
      case 'complete': {
        this.setState({ complete: window.event.target.checked });
        break;
      }
      case 'important': {
        if (this.state.important === '') {
          this.setState({ important: 'Y' });
        } else {
          this.setState({ important: '' });
        }
        break;
      }
      default:
    }
  }

  openEdit() {
    if (event.target.className.indexOf('fa-star') === -1
      && event.target.className.indexOf('taskChk') === -1) {
      this.list.current.style.display = 'none';
      this.setState({
        editTasks: (
          <InputTask
            listData={this.props.listData}
            closeAdd={this.closeEdit}
          />),
      });
    }
  }

  closeEdit() {
    this.list.current.style.display = '';
    this.setState({ editTasks: null });
  }

  render() {
    return (
      <div className="listBox">

        <div
          className={`list${this.state.important ? ' important' : ''}`}
          onClick={this.openEdit}
          ref={this.list}
        >

          <input
            type="checkbox"
            className="taskChk"
            checked={this.state.complete}
            onChange={this.changeState.bind(this, 'complete')}
          />

          <input
            type="text"
            className={`
              taskTitle
               ${this.state.complete ? ' complete' : ''}
               ${this.state.important ? ' important' : ''}
            `}
            value={this.props.listData.name}
          />
          <i
            className={
              this.state.important === 'Y'
                ? ' fas fa-star fa-lg iconImportant icon'
                : ' far fa-star fa-lg icon'
            }
            onClick={this.changeState.bind(this, 'important')}
          />
          <i className="fas fa-pen fa-lg icon" />

          <div className="listIcon">
            {this.props.listData.date !== ''
              ? <i className="far fa-calendar-alt icon" />
              : ''
          }
            {this.props.listData.date !== ''
              ? ` ${this.props.listData.date.substring(5).replace('-', '/')}`
              : ''
          }
            {this.props.listData.file !== ''
              ? <i className="fas fa-file icon" />
              : ''
          }
            {this.props.listData.commit !== ''
              ? <i className="fas fa-comment-dots icon" />
              : ''
          }
          </div>
        </div>

        <div>
          {this.state.editTasks}
        </div>
      </div>
    );
  }
}

export { List };
