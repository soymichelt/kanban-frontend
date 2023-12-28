import { Select } from '../../../shared/components/select';
import { NameWithIdProps } from '../../../shared/definitions/nameWithId';

export type UserSelectProps = {
  items?: NameWithIdProps[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
};

export const UserSelect = (props: UserSelectProps) => {
  const {
    items = [],
    value,
    onChange,
    disabled = false,
  } = props;

  return (
    <Select
      label={`Usuario`}
      placeholder='Seleccione al encargado'
      items={items}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
