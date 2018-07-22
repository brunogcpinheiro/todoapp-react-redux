import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';
import { Container, Header, Content, List, AddForm } from './styles';

import SendIcon from '../../assets/images/send.svg';
import BackgroundImage from '../../assets/images/bg.jpg';

class TodoList extends Component {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <Container>
        <Header>
          <img src={BackgroundImage} alt="Background" />
        </Header>
        <Content>
          <List>
            {this.props.todos.map(todo => (
              <li key={todo.id}>
                <div>
                  <strong>{todo.text}</strong>
                </div>
                <button onClick={() => this.props.removeTodo(todo.id)}>REMOVE</button>
              </li>
            ))}
          </List>
          <AddForm>
            <div>
              <input
                type="text"
                placeholder="Type a ToDo..."
                onChange={e => this.setState({ inputValue: e.target.value })}
              />
              <button type="submit" onClick={() => this.props.addTodo(this.state.inputValue)}>
                <img src={SendIcon} alt="Add" />
              </button>
            </div>
          </AddForm>
        </Content>
      </Container>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
