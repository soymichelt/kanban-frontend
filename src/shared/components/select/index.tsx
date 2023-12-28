import { NameWithIdProps } from '../../definitions/nameWithId';
import './index.styles.css';

export type SelectProps = {
  label: string;
  placeholder?: string;
  items?: NameWithIdProps[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
};

export const Select = (props: SelectProps) => {
  const {
    label,
    placeholder,
    items,
    value,
    onChange,
    disabled = false,
  } = props;

  return (
    <div className={`select-field ${disabled ? 'select-field--disabled' : ''}`}>
      <label>{label}</label>
      <select
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
      >
        {placeholder && (
          <option>{placeholder}</option>
        )}

        {items?.map(item =>
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        )}
      </select>
    </div>
  );
};
