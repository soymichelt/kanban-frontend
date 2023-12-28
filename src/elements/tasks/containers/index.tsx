/* eslint-disable react-hooks/exhaustive-deps */
import { DropResult } from 'react-beautiful-dnd';
import { Tasks } from '../components';
import { LOADING, useDataProvider } from '../../../shared/hooks/useDataProvider';
import { TaskModel, all, updateState } from '../../../services/tasks';
import { useContext, useEffect, useState } from 'react';
import { SECTIONS_LIST } from '../../../shared/constants';
import { globalState } from '../../../shared/states/global';

export const TasksContainer = () => {
  const { refreshingTasks, setRefreshingTasks } = useContext(globalState);
  const { state, ...tasksAction } = useDataProvider();

  const getTasks = () => {
    all()
      .then(tasks => tasksAction.success(tasks))
      .catch(error => tasksAction.catch(error));
  };

  useEffect(() => {
    if (state.statusData === LOADING) {
      getTasks();
    }
  }, [state.isRefresh]);

  useEffect(() => {
    if (refreshingTasks) {
      getTasks();
      setRefreshingTasks(false);
    }
  }, [refreshingTasks]);

  const { data } = state || [];

  const [completeId, setCompleteId] = useState<string | null>();
  const handleComplete = (itemId: string) => {
    setCompleteId(itemId);
    updateState(itemId, 4)
      .then(() => {
        tasksAction.loading();
      })
      .finally(() => setCompleteId(null));
  };

  const handlerDragEnd = (result: DropResult) => {
    if(!result.destination) return;

    updateState(result.draggableId, Number(result.destination.droppableId))
      .catch(error => {
        console.log('Error >>> ', error);
        tasksAction.loading();
      });

    const newTaskItems = data?.map((task: TaskModel) => {
      if (task.taskId === result.draggableId) {
        return { ...task, state: parseInt(result.destination?.droppableId as string) }
      }
      return task;
    });
    tasksAction.success(newTaskItems);
  };

  return (
    <Tasks
      sectionList={SECTIONS_LIST}
      items={data?.map((item: TaskModel) => ({
        itemId: item.taskId,
        itemState: item.state,
        itemDescription: item.description,
        itemCreator: item.assignedTo,
      }))}
      loading={false}
      onEdit={(item) => { console.log(item)}}
      onComplete={handleComplete}
      onDragEnd={handlerDragEnd}
      completeId={completeId as string}
    />
  );
};
