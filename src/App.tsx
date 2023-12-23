import { useState } from 'react';
import { RouterComponent } from './routes';
import { AuthStateProps, FormTaskStateProps, globalState, initialGlobalState } from './shared/states/global';

const App = () => {
  const [auth, setAuth] = useState<AuthStateProps>(initialGlobalState.auth);
  const [formEdit, setFormEdit] = useState<FormTaskStateProps>(initialGlobalState.formEdit);
  const [formCreate, setFormCreate] = useState<FormTaskStateProps>(initialGlobalState.formCreate);

  return (
    <globalState.Provider value={{
      auth,
      setAuth,
      formEdit,
      setFormEdit,
      formCreate,
      setFormCreate,
    }}>
      <RouterComponent />
    </globalState.Provider>
  )
}

export default App
