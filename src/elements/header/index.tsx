import { useContext } from 'react';
import { Header as HeaderComponent } from './../../shared/components/header';
import { globalState } from './../../shared/states/global';
import { TaskCreateFormContainer } from '../tasksCreate/containers';
import { signout } from '../../services/users';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(globalState);

  const { auth, setFormCreate } = useContext(globalState);

  const handleCreate = () => {
    setFormCreate({ isOpen: true });
  };

  const handleSignout = () => {
    signout()
      .then(() => {
        setAuth({ isLogged: false });
        navigate('/signin');
      });
  };

  return (
    <>
      <HeaderComponent
        isLogged={auth.isLogged}
        onCreate={handleCreate}
        onSignout={handleSignout}
      />

      <TaskCreateFormContainer />
    </>
  );
};