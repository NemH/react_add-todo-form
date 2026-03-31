import { FC } from 'react';
import { Todo } from '../../types/todosTypes';
import { UserInfo } from '../UserInfo';
import users from '../../api/users';

type Props = { todo: Todo };

export const TodoInfo: FC<Props> = ({ todo }) => {
  if (!todo || !todo.userId) {
    return null;
  }

  const user = users.find(u => u.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
