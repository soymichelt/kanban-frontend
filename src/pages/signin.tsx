/* eslint-disable react-hooks/exhaustive-deps */
import { SigninContainer } from '../elements/signin/containers';
import { Page } from '../shared/components/page';
import Background from '../assets/background.png';
import { useNavigate } from 'react-router-dom';
import { globalState } from '../shared/states/global';
import { useContext, useEffect } from 'react';
import { HeaderContainer } from '../elements/header/containers';

export const Signin = () => {
  const navigate = useNavigate();
  const { auth } = useContext(globalState);

  useEffect(() => {
    if (auth.isLogged) {
      navigate('/');
    }
  }, [auth.isLogged]);

  return (
    <>
      <HeaderContainer />
      <Page
        center
        backgroundImage={Background}
      >
        <SigninContainer />
      </Page>
    </>
  );
};
