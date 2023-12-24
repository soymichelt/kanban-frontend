import './index.styles.css';

export type TextFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement>;
  component?: 'input' | 'textarea';
};

export const TextField = (props: TextFieldProps) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    component = 'input'
  } = props;
  return (
    <div className={`text-field`}>
      <label>{label}</label>
      {component === 'input' ? (
        <input
          placeholder={placeholder ?? label}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          value={value}
        />
      ) : (
        <textarea
          placeholder={placeholder ?? label}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          value={value}
        ></textarea>
      )}
    </div>
  );
};