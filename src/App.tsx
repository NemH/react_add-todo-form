import './App.scss';
import { TodoList } from './components/TodoList';
import { Todo } from './types/todosTypes';
import React from 'react';
import todos from './api/todos';
import { User } from './types/userTypes';
import users from './api/users';
import { NewTodoForm } from './components/AddTodoForm/AddTodoForm';

// import usersFromServer from './api/users';
// import todosFromServer from './api/todos';

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>(todos);
  const [userList] = React.useState<User[]>(users);

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <NewTodoForm
        todoList={todoList}
        setTodoList={setTodoList}
        users={userList}
      />

      <TodoList todos={todoList} />
    </div>
  );
};
