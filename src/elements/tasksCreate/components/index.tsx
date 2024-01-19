import { Modal } from '../../../shared/components/modal';
import { TextField } from '../../../shared/components/textField';
import { Select } from '../../../shared/components/select';
import { SECTIONS_LIST } from '../../../shared/constants';
import { UserSelectContainer } from '../../userSelect/containers';
import { RadioButton } from '../../../shared/components/radiobutton';
import { RadioButtonGroup } from '../../../shared/components/radiobuttonGroup';

export type TaskCreateFormProps = {
  isOpen: boolean;
  title: string;
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
  onPriorityChange?: React.ChangeEventHandler<HTMLInputElement>;
  priority?: string;
  isLoading?: boolean;
};

export const TaskCreateForm = (props: TaskCreateFormProps) => {
  const {
    isOpen = false,
    title,
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
    onPriorityChange,
    priority,
    isLoading = false,
  } = props;

  return (
    <>
      {isOpen && (
        <Modal
          title={title}
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

          <RadioButtonGroup
            label={`Priority`}
            vertical
          >
            <RadioButton
              label={`Low`}
              value={`low`}
              onChange={onPriorityChange}
              checked={priority === 'low'}
              color={`#9e9e9e`}
            />
            <RadioButton
              label={`Medium`}
              value={`medium`}
              onChange={onPriorityChange}
              checked={priority === 'medium'}
              color={`#ffeb3b`}
            />
            <RadioButton
              label={`High`}
              value={`high`}
              onChange={onPriorityChange}
              checked={priority === 'high'}
              color={`#f44336`}
            />
          </RadioButtonGroup>
        </Modal>
      )}
    </>
  );
};
