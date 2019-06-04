import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: this.props.listData.important,
      complete: this.props.listData.complete,
    };
    this.changeState = this.changeState.bind(this);
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

  render() {
    return (
      <div className="listBlock">
        <div className={`list ${this.state.important ? ' important' : ''}`}>

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
            {this.props.listData.commit !== ''
              ? <i className="fas fa-file icon" />
              : ''
          }
          </div>
        </div>
      </div>
    );
  }
}

export { List };
