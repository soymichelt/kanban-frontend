import './index.styles.css';

export type TextFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const TextField = (props: TextFieldProps) => {
  const {
    label,
    placeholder,
    value,
    onChange,
  } = props;
  return (
    <div className={`text-field`}>
      <label>{label}</label>
      <input
        placeholder={placeholder ?? label}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};