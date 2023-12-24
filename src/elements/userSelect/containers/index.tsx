/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { LOADING, useDataProvider } from '../../../shared/hooks/useDataProvider';
import { UserSelect } from '../components';
import { UserModel, all } from '../../../services/users';

export type UserSelectContainerProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export const UserSelectContainer = (props: UserSelectContainerProps) => {
  const { value, onChange } = props;
  const { state, success, errorCatch } = useDataProvider();

  useEffect(() => {
    if (state.statusData === LOADING) {
      all()
        .then(users => success(users))
        .catch(error => errorCatch(error));
    }
  }, [state.isRefresh]);

  return (
    <UserSelect
      items={state.data?.map((item: UserModel) => ({
        id: item.userId,
        name: item.username,
      }))}
      value={value}
      onChange={onChange}
    />
  );
};
