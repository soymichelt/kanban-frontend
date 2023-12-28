import { ReactElement, useContext } from 'react';
import { globalState } from '../../../shared/states/global';

export type IsAuthenticatedProps = {
  children: string | number | ReactElement | ReactElement[];
};

export const IsAuthenticated = (props: IsAuthenticatedProps) => {
  const { auth } = useContext(globalState);
  const { children } = props;
  return (
    <>
      {auth.isLogged && children}
    </>
  );
};
