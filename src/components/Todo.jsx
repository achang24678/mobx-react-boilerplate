import React from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todo, store }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
    <button
      onClick={() => {
        store.test = "aiqing";
      }}
    ></button>
    {store.test}
  </li>
));

export default Todo;
