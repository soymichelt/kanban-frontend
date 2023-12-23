import { ReactElement } from 'react';
import './index.styles.css';

export type IconButtonProps = {
  children: ReactElement;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const IconButton = (props: IconButtonProps) => {
  const { children, onClick } = props;

  return (
    <button className={`icon-button`} onClick={onClick}>
      {children}
    </button>
  );
};