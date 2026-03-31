import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/todosTypes';
import { FC } from 'react';

type Props = { todos: Todo[] };

export const TodoList: FC<Props> = ({ todos }) => {
  if (!todos) {
    return null;
  }

  return (
    <section className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
