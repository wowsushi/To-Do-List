import React from 'react';
import PropTypes from 'prop-types';

class InputName extends React.Component {
  render() {
    const { className, inputName } = this.props;
    return (
      <div className="inputName">
        <i className={className} />
        {inputName}
      </div>
    );
  }
}

InputName.propTypes = {
  className: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export { InputName };
