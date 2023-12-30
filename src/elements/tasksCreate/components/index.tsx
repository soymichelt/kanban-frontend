import { Modal } from '../../../shared/components/modal';
import { TextField } from '../../../shared/components/textField';
import { Select } from '../../../shared/components/select';
import { SECTIONS_LIST } from '../../../shared/constants';
import { UserSelectContainer } from '../../userSelect/containers';

export type TaskCreateFormProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  onAcceptModal?: () => void;
  onDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  description?: string | undefined;
  descriptionErrorMessage?: string;
  onStateChange: React.ChangeEventHandler<HTMLSelectElement>;
  state?: number | undefined;
  stateErrorMessage?: string;
  onUserChange: React.ChangeEventHandler<HTMLSelectElement>;
  userId?: string | undefined;
  userIdErrorMessage?: string;
  isLoading?: boolean;
};

export const TaskCreateForm = (props: TaskCreateFormProps) => {
  const {
    isOpen = false,
    onCloseModal,
    onAcceptModal,
    onDescriptionChange,
    description,
    descriptionErrorMessage,
    onStateChange,
    state,
    stateErrorMessage,
    onUserChange,
    userId,
    userIdErrorMessage,
    isLoading = false,
  } = props;

  return (
    <>
      {isOpen && (
        <Modal
          title={`Creando una tarea...`}
          onClose={onCloseModal}
          onAccept={onAcceptModal}
          acceptButtonDisabled={isLoading}
        >
          <TextField
            label={`Descripción`}
            placeholder={`Ingresa una descripción`}
            value={description}
            onChange={onDescriptionChange}
            component='textarea'
            disabled={isLoading}
            errorMessage={descriptionErrorMessage}
          />

          <Select
            label={`Status de la tarea`}
            placeholder='Seleccione el status'
            items={SECTIONS_LIST.map(item => ({
              id: item.sectionId,
              name: item.name,
            }))}
            value={state?.toString()}
            onChange={onStateChange}
            disabled={isLoading}
            errorMessage={stateErrorMessage}
          />

          <UserSelectContainer
            value={userId}
            onChange={onUserChange}
            disabled={isLoading}
            errorMessage={userIdErrorMessage}
          />
        </Modal>
      )}
    </>
  );
};
