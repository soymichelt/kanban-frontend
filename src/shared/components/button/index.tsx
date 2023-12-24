import './index.styles.css';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: string | number | React.ReactElement | Array<React.ReactElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    onClick,
    children
  } = props;

  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
