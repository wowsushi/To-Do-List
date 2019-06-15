import React from 'react';
import { connect } from 'react-redux';
import { InputTask } from '../InputTask';
import { editTodoList } from '../../actions';

class ConnectList extends React.Component {
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
    this.updateTodolist = this.updateTodolist.bind(this)
    this.list = React.createRef();
  }

  changeState(type) {
    switch (type) {
      case 'complete': {
        this.setState({ complete: window.event.target.checked },
          this.updateTodolist);
        break;
      }
      case 'important': {
        if (this.state.important === '') {
          this.setState({ important: 'Y' }, this.updateTodolist);
        } else {
          this.setState({ important: '' }, this.updateTodolist);
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
            changeState={this.changeState.bind(this)}
            editTodoList={this.props.editTodoList}
          />),
      });
    }
  }

  closeEdit() {
    this.list.current.style.display = '';
    this.setState({ editTasks: null });
  }

  updateTodolist() {
    let updateList = Object.assign({}, this.props.listData)
    updateList = { ...updateList, complete: this.state.complete, important: this.state.important };
    this.props.editTodoList(updateList);
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

const mapDispatchToProps = dispatch => ({
  editTodoList: todoList => dispatch(editTodoList(todoList)),
});


const List = connect(null, mapDispatchToProps)(ConnectList);

export { List };
