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
  type: 'create' | 'edit';
  formData?: {
    id?: string;
    description?: string;
    state?: number;
    userId?: string;
    priority?: string;
  };
};

export type GlobalStateSchema = {
  auth: AuthStateProps,
  setAuth: (auth: AuthStateProps) => void;
  formCreate: FormTaskStateProps;
  setFormCreate: (form: FormTaskStateProps) => void;
  refreshingTasks: boolean;
  setRefreshingTasks: (isRefreshing: boolean) => void;
  showNotification: (message: string, type: 'default' | 'info' | 'success' | 'warn' | 'error') => void;
};

export const initialGlobalState: GlobalStateSchema = {
  auth: {
    isLogged: true,
  },
  setAuth: () => { },
  formCreate: {
    isOpen: false,
    type: 'create',
  },
  setFormCreate: () => { },
  refreshingTasks: true,
  setRefreshingTasks: () => { },
  showNotification: () => { },
};

export const globalState = createContext<GlobalStateSchema>(initialGlobalState);
