import { useNavigate } from 'react-router-dom';
import { Header } from '../components';
import { useContext, useState } from 'react';
import { globalState } from '../../../shared/states/global';
import { signout } from '../../../services/users';

export const HeaderContainer = () => {
  const navigate = useNavigate();
  const { setAuth, auth, setFormCreate } = useContext(globalState);

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

  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  const handleOpenSidebar = () => setSidebarIsOpen(true);
  const handleCloseSidebar = () => setSidebarIsOpen(false);

  return (
    <Header
      isLogged={auth.isLogged}
      onCreate={handleCreate}
      onSignout={handleSignout}
      sidebarIsOpen={sidebarIsOpen}
      onOpenSidebar={handleOpenSidebar}
      onCloseSidebar={handleCloseSidebar}
    />
  );
};
