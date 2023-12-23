/* eslint-disable react-hooks/exhaustive-deps */
import { DropResult } from 'react-beautiful-dnd';
import { Tasks } from '../components';
import { LOADING, useDataProvider } from '../../../shared/hooks/useDataProvider';
import { TaskModel, all, updateState } from '../../../services/tasks';
import { useEffect, useState } from 'react';

const SECTIONS_LIST= [
  { sectionId: '0', name: 'ToDo' },
  { sectionId: '1', name: 'Work In Progress' },
  { sectionId: '2', name: 'Task Blocked' },
  { sectionId: '3', name: 'QA Testing' },
  { sectionId: '4', name: 'Done' },
];

export const TasksContainer = () => {
  const {
    state,
    loading: refreshTasks,
    success: setTasks,
    errorCatch,
  } = useDataProvider();

  useEffect(() => {
    if (state.statusData === LOADING) {
      all()
        .then(tasks => setTasks(tasks))
        .catch(error => errorCatch(error));
    }
  }, [state.isRefresh]);

  const { data } = state || [];

  const [completeId, setCompleteId] = useState<string | null>();
  const handleComplete = (itemId: string) => {
    setCompleteId(itemId);
    updateState(itemId, 4)
      .then(() => {
        refreshTasks();
      })
      .finally(() => setCompleteId(null));
  };

  const handlerDragEnd = (result: DropResult) => {
    if(!result.destination) return;

    updateState(result.draggableId, Number(result.destination.droppableId))
      .catch(error => {
        console.log('Error >>> ', error);
        refreshTasks();
      });

    const newTaskItems = data?.map((task: TaskModel) => {
      if (task.taskId === result.draggableId) {
        return { ...task, state: parseInt(result.destination?.droppableId as string) }
      }
      return task;
    });
    setTasks(newTaskItems);
  };

  return (
    <Tasks
      sectionList={SECTIONS_LIST}
      items={data?.map((item: TaskModel) => ({
        itemId: item.taskId,
        itemState: item.state,
        itemDescription: item.description,
        itemCreator: item.author,
      }))}
      loading={false}
      onEdit={(item) => { console.log(item)}}
      onComplete={handleComplete}
      onDragEnd={handlerDragEnd}
      completeId={completeId as string}
    />
  );
};
