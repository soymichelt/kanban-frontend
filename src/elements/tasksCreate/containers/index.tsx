/* eslint-disable @typescript-eslint/no-explicit-any */
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
    showNotification,
  } = useContext(globalState);

  const descriptionField = useField('');
  const stateField = useField('');
  const userIdField = useField('');

  const { state, ...createTaskAction } = useDataProvider(false);

  const handleCloseModal = () => {
    setFormCreate({ isOpen: false });
  };

  const handleAcceptModal = () => {
    if (descriptionField.isEmpty() || stateField.isEmpty() || userIdField.isEmpty()) {
      if (descriptionField.isEmpty()) {
        descriptionField.setError('La descripción es requerida');
      }
      if (stateField.isEmpty()) {
        stateField.setError('Seleccione el estado inicial de esta tarea');
      }
      if (userIdField.isEmpty()) {
        userIdField.setError('Seleccione un usuario');
      }

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
        showNotification('Task created 🍻', 'info');
        setFormCreate({ isOpen: false });
      })
      .catch((error: any) => {
        createTaskAction.catch(error);
        showNotification(error.message, 'error');
        console.log(error);
      });
  };

  return (
    <TaskCreateForm
      isOpen={formCreate.isOpen}
      onCloseModal={handleCloseModal}
      onAcceptModal={handleAcceptModal}
      description={descriptionField.value}
      descriptionErrorMessage={descriptionField.error}
      onDescriptionChange={descriptionField.onChange}
      state={parseInt(stateField.value as string)}
      stateErrorMessage={stateField.error}
      onStateChange={stateField.onChange}
      userId={userIdField.value}
      userIdErrorMessage={userIdField.error}
      onUserChange={userIdField.onChange}
      isLoading={state.statusData === LOADING}
    />
  );
};
