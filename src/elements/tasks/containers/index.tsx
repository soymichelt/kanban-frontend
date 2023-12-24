/* eslint-disable react-hooks/exhaustive-deps */
import { DropResult } from 'react-beautiful-dnd';
import { Tasks } from '../components';
import { LOADING, useDataProvider } from '../../../shared/hooks/useDataProvider';
import { TaskModel, all, updateState } from '../../../services/tasks';
import { useContext, useEffect, useState } from 'react';
import { SECTIONS_LIST } from '../../../shared/constants';
import { globalState } from '../../../shared/states/global';

export const TasksContainer = () => {
  const {
    state,
    loading: refreshTasks,
    success: setTasks,
    errorCatch,
  } = useDataProvider();

  const {
    refreshingTasks,
    setRefreshingTasks,
  } = useContext(globalState);

  useEffect(() => {
    if (state.statusData === LOADING && refreshingTasks) {
      all()
        .then(tasks => {
          setTasks(tasks);
          setRefreshingTasks(false);
        })
        .catch(error => errorCatch(error));
    }
  }, [state.isRefresh, refreshingTasks]);

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
