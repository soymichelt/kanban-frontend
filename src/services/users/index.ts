import { API_URL, API_HOST_HEADER } from './../config';

const USER_API_URL = `${API_URL}/helloWorld/users`;

export type UserModel = {
  userId: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export const all = async (): Promise<UserModel[]> => {
  const fn = new Promise<UserModel[]>((resolve, reject) => {
    fetch(USER_API_URL, {
      method: 'GET',
      headers: {
        'Host': API_HOST_HEADER,
      },
      redirect: 'follow',
    })
      .then(res => res.text())
      .then(data => resolve(JSON.parse(data)))
      .catch(error => reject(error));
  });

  return fn;
};

export const register = async (user: Omit<UserModel, 'userId' | 'createdAt' | 'updatedAt'>): Promise<UserModel> => {
  const fn = new Promise<UserModel>((resolve, reject) => {
    fetch(USER_API_URL, {
      method: 'POST',
      headers: {
        'Host': API_HOST_HEADER,
      },
      redirect: 'follow',
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((data) => resolve(JSON.parse(data)))
      .catch((error) => reject(error));
  });

  return fn;
}
