import React from 'react';
import { connect } from 'react-redux';
import { InputTasksForm } from '../InputTasksForm';
import { addTodoList } from '../../actions';

class ConnectInputTask extends React.Component {
  constructor(props) {
    super(props);
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
    this.changeState = this.changeState.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.tagImportant = this.tagImportant.bind(this);
    this.filebox = React.createRef();
  }

  changeState(event) {
    let { value } = event.target;

    if (event.target.name === 'file') {
      value = value.substring(value.lastIndexOf('\\') + 1);
    } else if (event.target.name === 'complete') {
      value = event.target.checked;
    }
    this.setState({ [event.target.name]: value });
  }

  tagImportant() {
    if (this.state.important === '') {
      this.setState({ important: 'Y' });
    } else {
      this.setState({ important: '' });
    }
  }

  submitTodo() {
    if (this.state.name === '') {
      alert('代辦事項名稱未輸入!');
    } else {
      this.props.addTodoList(this.state);
      alert('成功新增!');
      this.props.closeAdd();
      this.setState({
        id: '', name: '', date: '', time: '', file: '', commit: '', important: '', complete: false,
      });
      this.filebox.current.value = '';
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
              ? 'far fa-star fa-lg icon iconImportant' : 'far fa-star fa-lg icon'}
            onClick={this.tagImportant}
          />
          <i className="fas fa-pen fa-lg icon icon_edit" />
          <InputTasksForm
            closeAdd={this.props.closeAdd}
            stateData={this.state}
            changeState={this.changeState}
            submitTodo={this.submitTodo}
            filebox={this.filebox}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoList: todoList => dispatch(addTodoList(todoList)),
});

const InputTask = connect(null, mapDispatchToProps)(ConnectInputTask);

export { InputTask };
