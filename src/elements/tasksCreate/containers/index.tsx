/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from 'react';
import { globalState } from '../../../shared/states/global';
import { TaskCreateForm } from '../components';
import { create, update } from '../../../services/tasks';
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
  const priorityField = useField('');
  const { state, ...createTaskAction } = useDataProvider(false);

  useEffect(() => {
    if (formCreate.formData) {
      const { formData } = formCreate;

      descriptionField.update(formData.description ?? '');
      stateField.update(formData.state?.toString() ?? '2');
      userIdField.update(formData.userId ?? '');
      priorityField.update(formData.priority ?? 'low');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formCreate.formData]);

  const reset = () => {
    descriptionField.reset();
    stateField.reset();
    userIdField.reset();
    priorityField.reset();
    setFormCreate({ isOpen: false, type: 'create' });
  };

  const handleCloseModal = () => {
    reset();
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

    let actionPromise: Promise<unknown>;
    if (formCreate.type === 'create') {
      actionPromise = create({
        description: descriptionField.value as string,
        state: parseInt(stateField.value as string),
        userId: userIdField.value as string,
        priority: priorityField.value as string,
      });
    } else {
      actionPromise = update(formCreate?.formData?.id as string, {
        description: descriptionField.value as string,
        state: parseInt(stateField.value as string),
        userId: userIdField.value as string,
        priority: priorityField.value as string,
      });
    }

    actionPromise
      .then(() => {
        setRefreshingTasks(true);
        reset();
        createTaskAction.success();
        showNotification('Task created 🍻', 'info');
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
      title={`${formCreate.type === 'create' ? 'Creando' : 'Editando'} una tarea...`}
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
      priority={priorityField.value}
      onPriorityChange={priorityField.onChange}
      isLoading={state.statusData === LOADING}
    />
  );
};
