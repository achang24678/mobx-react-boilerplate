import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Todo from "./Todo";

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} store={this.props.store} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
        <button
          onClick={() => {
            this.props.store.test = "clicked";
          }}
        ></button>
        <p>{this.props.store.test}</p>
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoList;
