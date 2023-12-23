import { useContext } from 'react';
import { Modal } from '../../../shared/components/modal';
import { globalState } from '../../../shared/states/global';
import { TextField } from '../../../shared/components/textField';

export const TaskCreateForm = () => {
  const { formCreate, setFormCreate } = useContext(globalState);

  const handleDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormCreate({
      ...formCreate,
      formData: {
        ...(formCreate?.formData || {}),
        description: e.currentTarget.value,
      },
    });
  };

  return (
    <>
      {formCreate.isOpen && (
        <Modal title={`Creando una tarea...`}>
          <TextField
            label={`Descripción`}
            placeholder={`Ingresa una descripción`}
            value={formCreate.formData?.description}
            onChange={handleDescriptionChange}
          />
        </Modal>
      )}
    </>
  );
};
