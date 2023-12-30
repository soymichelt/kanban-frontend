import { Select } from '../../../shared/components/select';
import { NameWithIdProps } from '../../../shared/definitions/nameWithId';

export type UserSelectProps = {
  items?: NameWithIdProps[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  errorMessage?: string;
};

export const UserSelect = (props: UserSelectProps) => {
  const {
    items = [],
    value,
    onChange,
    disabled = false,
    errorMessage,
  } = props;

  return (
    <Select
      label={`Usuario`}
      placeholder='Seleccione al encargado'
      items={items}
      value={value}
      onChange={onChange}
      disabled={disabled}
      errorMessage={errorMessage}
    />
  );
};
