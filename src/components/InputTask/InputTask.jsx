import React from 'react';
import { connect } from 'react-redux';
import { InputTasksForm } from '../InputTasksForm';
import { addTodoList } from '../../actions';

class ConnectInputTask extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.listData) {
      this.state = this.props.listData
    } else {
      this.state = {
        id: '',
        name: '',
        date: '',
        time: '',
        file: '',
        commit: '',
        important: '',
        complete: false,
      };
    }
    this.changeState = this.changeState.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.tagImportant = this.tagImportant.bind(this);
    this.filebox = React.createRef();
    this.changeListState = (type) => {
      if (this.props.changeState) {
        this.props.changeState(type);
      } else {
        console.log('新增狀態所以沒有this.props.changeState');
      }
    };
  }

  changeState(event) {
    let { value } = event.target;

    if (event.target.name === 'file') {
      value = value.substring(value.lastIndexOf('\\') + 1);
    } else if (event.target.name === 'complete') {
      value = event.target.checked;
      this.changeListState('complete')
    }
    this.setState({ [event.target.name]: value });
  }

  tagImportant() {
    if (this.state.important === '') {
      this.setState({ important: 'Y' });
    } else {
      this.setState({ important: '' });
    }
    this.changeListState('important');
  }

  submitTodo() {
    if (this.state.name === '') {
      alert('代辦事項名稱未輸入!');
    } else {
      if (this.state.id === '') {
        this.props.addTodoList(this.state);
        alert('成功新增!');
      } else {
        this.props.editTodoList(this.state);
        alert('編輯成功!');
      }
      this.setState({
        id: '', name: '', date: '', time: '', file: '', commit: '', important: '', complete: false,
      });
      this.filebox.current.value = '';
      this.props.closeAdd();
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.important === 'Y'
          ? 'important inputTaskTitle' : 'inputTaskTitle'}
        >
          <input
            name="complete"
            type="checkbox"
            className="taskChk"
            checked={this.state.complete}
            onChange={this.changeState}
          />
          <input
            name="name"
            type="text"
            className={`taskTitle
              ${this.state.complete ? ' complete' : ''}
              ${this.state.important === 'Y' ? 'important inputTaskTitle' : 'inputTaskTitle'}
            `}
            placeholder="Type Something Here..."
            value={this.state.name}
            onChange={this.changeState}
          />
          <i
            className={this.state.important === 'Y'
              ? 'fas fa-star fa-lg icon iconImportant' : 'far fa-star fa-lg icon'}
            onClick={this.tagImportant}
          />
          <i className="fas fa-pen fa-lg icon icon_edit" />
        </div>
        <InputTasksForm
          closeAdd={this.props.closeAdd}
          stateData={this.state}
          changeState={this.changeState}
          submitTodo={this.submitTodo}
          filebox={this.filebox}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoList: todoList => dispatch(addTodoList(todoList)),
});

const InputTask = connect(null, mapDispatchToProps)(ConnectInputTask);

export { InputTask };
