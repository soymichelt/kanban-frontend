import { API_URL, API_HOST_HEADER } from './../config';

const TASK_API_URL = `${API_URL}/tasks`;

export type TaskModel = {
  taskId: string;
  description: string;
  state: number;
  author: string;
  userId: string;
};

export const all = async (): Promise<TaskModel[]> => {
  const fn = new Promise<TaskModel[]>((resolve, reject) => {
    fetch(TASK_API_URL, {
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
}

export const create = async (task: Omit<TaskModel, 'taskId' | 'author'>): Promise<TaskModel> => {
  const fn = new Promise<TaskModel>((resolve, reject) => {
    fetch(TASK_API_URL, {
      method: 'POST',
      headers: {
        'Host': API_HOST_HEADER,
      },
      redirect: 'follow',
      body: JSON.stringify(task),
    })
      .then((res) => res.text())
      .then((data) => resolve(JSON.parse(data)))
      .catch((error) => reject(error));
  });

  return fn;
}

export const updateState = async (taskId: string, state: number): Promise<TaskModel> => {
  const fn = new Promise<TaskModel>((resolve, reject) => {
    fetch(`${TASK_API_URL}/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Host': API_HOST_HEADER,
      },
      body: JSON.stringify({ state }),
    })
      .then((res) => res.text())
      .then((data) => resolve(JSON.parse(data)))
      .catch((error) => reject(error));
  });

  return fn;
}
