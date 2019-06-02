import React from 'react';

class InputName extends React.Component {
  render() {
    return (
      <div className="inputName">
        <i className={this.props.className} />
        {this.props.inputName}
      </div>
    );
  }
}

export { InputName };
