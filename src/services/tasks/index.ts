import { API_URL, API_HOST_HEADER, getAuthHeader } from './../config';

const TASK_API_URL = `${API_URL}/tasks`;

export type TaskModel = {
  taskId: string;
  description: string;
  state: number;
  assignedTo: string;
  userId: string;
  priority: string;
};

export const all = async (): Promise<TaskModel[]> => {
  const fn = new Promise<TaskModel[]>((resolve, reject) => {
    fetch(TASK_API_URL, {
      method: 'GET',
      headers: {
        'Host': API_HOST_HEADER,
        'Authorization': getAuthHeader() as string,
      },
      redirect: 'follow',
    })
      .then(res => res.text())
      .then(data => resolve(JSON.parse(data)))
      .catch(error => reject(error));
  });

  return fn;
}

export const create = async (task: Omit<TaskModel, 'taskId' | 'assignedTo'>): Promise<TaskModel> => {
  const fn = new Promise<TaskModel>((resolve, reject) => {
    fetch(TASK_API_URL, {
      method: 'POST',
      headers: {
        'Host': API_HOST_HEADER,
        'Authorization': getAuthHeader() as string,
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

export const update = async (taskId: string, task: Omit<TaskModel, 'taskId' | 'assignedTo'>): Promise<TaskModel> => {
  const fn = new Promise<TaskModel>((resolve, reject) => {
    fetch(`${TASK_API_URL}/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Host': API_HOST_HEADER,
        'Authorization': getAuthHeader() as string,
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
    fetch(`${TASK_API_URL}/state/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Host': API_HOST_HEADER,
        'Authorization': getAuthHeader() as string,
      },
      body: JSON.stringify({ state }),
    })
      .then((res) => res.text())
      .then((data) => resolve(JSON.parse(data)))
      .catch((error) => reject(error));
  });

  return fn;
}
