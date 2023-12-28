export const API_URL = import.meta.env.API_URL || 'https://gp5pqokde1.execute-api.us-east-1.amazonaws.com/v1';
export const API_HOST_HEADER = import.meta.env.API_HOST_HEADER || 'gp5pqokde1.execute-api.us-east-1.amazonaws.com';

const USER_AUTH_DATA_KEY = 'authData';

export const saveAuthData = (authData: Record<string, unknown>) => {
  localStorage.setItem(USER_AUTH_DATA_KEY, JSON.stringify(authData));
};

export const removeAuthData = () => {
  localStorage.removeItem(USER_AUTH_DATA_KEY);
};

export const getAuthData = (): Record<string, unknown> | undefined => {
  const authData = localStorage.getItem(USER_AUTH_DATA_KEY);
  if (!authData) {
    return;
  }

  return JSON.parse(authData);
};

export const getAuthHeader = (): string | undefined => {
  const authData = getAuthData();
  if (!authData) {
    return;
  }

  const token = authData.token as string;
  return `Bearer ${token}`;
};

export const verifyAuthToken = (): boolean => {
  try {
    const authData = getAuthData();
    if (!authData) {
      return false;
    }

    return !!authData.token;
  } catch(error) {
    console.log('VerifyAuthToken error >>> ', error);
    return false;
  }
};
