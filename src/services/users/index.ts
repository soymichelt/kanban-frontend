import { API_URL, API_HOST_HEADER } from './../config';

const USER_API_URL = `${API_URL}/helloWorld/users`;

export type UserModel = {
  userId: string;
  username: string;
  email: string;
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