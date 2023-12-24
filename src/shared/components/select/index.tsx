import { NameWithIdProps } from '../../definitions/nameWithId';
import './index.styles.css';

export type SelectProps = {
  label: string;
  placeholder?: string;
  items?: NameWithIdProps[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = (props: SelectProps) => {
  const {
    label,
    placeholder,
    items,
    value,
    onChange,
  } = props;

  return (
    <div className='select-field'>
      <label>{label}</label>
      <select defaultValue={value} onChange={onChange}>
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
