import { useContext } from 'react';
import { globalState } from '../../../shared/states/global';
import { TaskCreateForm } from '../components';
import { create } from '../../../services/tasks';
import { useField } from '../../../shared/hooks/useField';
import { LOADING, useDataProvider } from '../../../shared/hooks/useDataProvider';

export const TaskCreateFormContainer = () => {
  const {
    formCreate,
    setFormCreate,
    setRefreshingTasks,
  } = useContext(globalState);

  const descriptionField = useField('');
  const stateField = useField('');
  const userIdField = useField('');

  const { state, ...createTaskAction } = useDataProvider(false);

  const handleCloseModal = () => {
    setFormCreate({ isOpen: false });
  };

  const handleAcceptModal = () => {
    if (!descriptionField.value?.trim() || !stateField.value?.trim() || !userIdField.value?.trim()) {
      return;
    }

    createTaskAction.loading();
    create({
      description: descriptionField.value as string,
      state: parseInt(stateField.value as string),
      userId: userIdField.value as string,
    })
      .then(() => {
        setRefreshingTasks(true);
        descriptionField.reset();
        stateField.reset();
        userIdField.reset();
        createTaskAction.success();
        setFormCreate({ isOpen: false });
      })
      .catch(error => {
        createTaskAction.catch(error);
        console.log(error);
      });
  };

  return (
    <TaskCreateForm
      isOpen={formCreate.isOpen}
      onCloseModal={handleCloseModal}
      onAcceptModal={handleAcceptModal}
      description={descriptionField.value}
      onDescriptionChange={descriptionField.onChange}
      state={parseInt(stateField.value as string)}
      onStateChange={stateField.onChange}
      userId={userIdField.value}
      onUserChange={userIdField.onChange}
      isLoading={state.statusData === LOADING}
    />
  );
};
