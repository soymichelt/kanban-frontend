import { useContext } from 'react';
import { globalState } from '../../../shared/states/global';
import { TaskCreateForm } from '../components';
import { create } from '../../../services/tasks';
import { useField } from '../../../shared/hooks/useField';

export const TaskCreateFormContainer = () => {
  const {
    formCreate,
    setFormCreate,
    setRefreshingTasks,
  } = useContext(globalState);

  const descriptionField = useField('');
  const stateField = useField('');
  const userIdField = useField('');

  const handleCloseModal = () => {
    setFormCreate({ isOpen: false });
    setRefreshingTasks(true);
  };

  const handleAcceptModal = () => {
    create({
      description: descriptionField.value as string,
      state: parseInt(stateField.value as string),
      userId: userIdField.value as string,
    })
      .then(() => setFormCreate({ isOpen: false }))
      .catch(error => console.log(error));
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
    />
  );
};
