import { useContext } from 'react';
import { Header as HeaderComponent } from './../../shared/components/header';
import { globalState } from './../../shared/states/global';
import { TaskCreateFormContainer } from '../tasksCreate/containers';

export const Header = () => {
  const { auth, setFormCreate } = useContext(globalState);

  const handleCreate = () => {
    setFormCreate({ isOpen: true });
  };

  return (
    <>
      <HeaderComponent
        isLogged={auth.isLogged}
        onCreate={handleCreate}
      />
      <TaskCreateFormContainer />
    </>
  );
};