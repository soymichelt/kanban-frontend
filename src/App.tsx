import { useState } from 'react';
import { RouterComponent } from './routes';
import { AuthStateProps, FormTaskStateProps, globalState, initialGlobalState } from './shared/states/global';
import { getAuthData, verifyAuthToken } from './services/config';

const App = () => {
  const userIsAuthenticated = verifyAuthToken();
  const userAuthData = getAuthData();
  const [auth, setAuth] = useState<AuthStateProps>({
    isLogged: userIsAuthenticated,
    myAccount: userAuthData
      ? {
        token: userAuthData.token as string,
        userId: userAuthData.userId as string,
        username: userAuthData.username as string,
        email: userAuthData.email as string,
        phone: userAuthData.phone as string,
        image: userAuthData.image as string,
      }
      : undefined,
  });
  const [formEdit, setFormEdit] = useState<FormTaskStateProps>(initialGlobalState.formEdit);
  const [formCreate, setFormCreate] = useState<FormTaskStateProps>(initialGlobalState.formCreate);
  const [refreshingTasks, setRefreshingTasks] = useState<boolean>(initialGlobalState.refreshingTasks);

  return (
    <globalState.Provider value={{
      auth,
      setAuth,
      formEdit,
      setFormEdit,
      formCreate,
      setFormCreate,
      refreshingTasks,
      setRefreshingTasks,
    }}>
      <RouterComponent />
    </globalState.Provider>
  )
}

export default App
