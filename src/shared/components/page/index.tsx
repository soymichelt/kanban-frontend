import { ReactElement } from 'react';
import './index.styles.css';

export type PageProps = {
  className?: string;
  children: string | number | ReactElement | Array<ReactElement>;
  center?: boolean;
};

export const Page = (props: PageProps) => {
  const {
    className = '',
    children,
    center = false,
  } = props;

  return (
    <main className={`page-component ${className} ${center && 'page-component--center'}`}>
      {children}
    </main>
  );
};