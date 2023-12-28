import { createContext } from 'react';

export type AuthStateProps = {
  isLogged: boolean;
  myAccount?: {
    userId: string;
    username: string;
    email: string;
    token: string;
    phone?: string;
    image?: string;
  };
};

export type FormTaskStateProps = {
  isOpen: boolean;
  formData?: {
    description?: string;
    state?: number;
    userId?: string;
  };
};

export type GlobalStateSchema = {
  auth: AuthStateProps,
  setAuth: (auth: AuthStateProps) => void;
  formEdit: FormTaskStateProps;
  setFormEdit: (form: FormTaskStateProps) => void;
  formCreate: FormTaskStateProps;
  setFormCreate: (form: FormTaskStateProps) => void;
  refreshingTasks: boolean;
  setRefreshingTasks: (isRefreshing: boolean) => void;
};

export const initialGlobalState: GlobalStateSchema = {
  auth: {
    isLogged: true,
  },
  setAuth: () => { },
  formEdit: {
    isOpen: false,
  },
  setFormEdit: () => { },
  formCreate: {
    isOpen: false,
  },
  setFormCreate: () => { },
  refreshingTasks: true,
  setRefreshingTasks: () => { },
};

export const globalState = createContext<GlobalStateSchema>(initialGlobalState);
