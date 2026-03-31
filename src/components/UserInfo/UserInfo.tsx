import { FC } from 'react';
import { User } from '../../types/userTypes';

type Props = { user?: User };

export const UserInfo: FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
