import React from 'react';
import { connect } from 'react-redux';
import { List } from '../List';

class ConnectTodoLists extends React.Component {
  render() {
    const Lists = this.props.data.map(item => <List key={item.id} listData={item} />);
    return (
      <div>
        {Lists}
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state });

const TodoLists = connect(mapStateToProps)(ConnectTodoLists);

export { TodoLists };
