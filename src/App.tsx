import { useState } from 'react';
import { RouterComponent } from './routes';
import { AuthStateProps, FormTaskStateProps, globalState, initialGlobalState } from './shared/states/global';

const App = () => {
  const [auth, setAuth] = useState<AuthStateProps>(initialGlobalState.auth);
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
