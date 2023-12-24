import { useContext } from 'react';
import { globalState } from '../../../shared/states/global';
import { TaskCreateForm } from '../components';
import { create } from '../../../services/tasks';

export const TaskCreateFormContainer = () => {
  const {
    formCreate,
    setFormCreate,
    setRefreshingTasks,
  } = useContext(globalState);

  const handleCloseModal = () => {
    setFormCreate({ isOpen: false });
    setRefreshingTasks(true);
  };

  const handleAcceptModal = () => {
    create({
      description: formCreate.formData?.description as string,
      state: formCreate.formData?.state as number,
      author: 'Soymichel Dev',
      userId: formCreate.formData?.userId as string,
    })
      .then(() => {
        setFormCreate({ isOpen: false });
      })
      .catch(error => console.log(error));
  };

  const handleDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setFormCreate({
      ...formCreate,
      formData: {
        ...(formCreate?.formData || {}),
        description: e.currentTarget.value,
      },
    });
  };

  const handleStateChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setFormCreate({
      ...formCreate,
      formData: {
        ...(formCreate?.formData || {}),
        state: parseInt(e.currentTarget.value),
      },
    });
  };

  const handleUserChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setFormCreate({
      ...formCreate,
      formData: {
        ...(formCreate?.formData || {}),
        userId: e.currentTarget.value,
      },
    });
  };

  return (
    <TaskCreateForm
      isOpen={formCreate.isOpen}
      onCloseModal={handleCloseModal}
      onAcceptModal={handleAcceptModal}
      onDescriptionChange={handleDescriptionChange}
      description={formCreate.formData?.description}
      onStateChange={handleStateChange}
      state={formCreate.formData?.state}
      onUserChange={handleUserChange}
      userId={formCreate.formData?.userId}
    />
  );
};
