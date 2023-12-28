/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '../elements/header';
import { SignupContainer } from '../elements/signup/containers';
import { Page } from '../shared/components/page';
import Background from '../assets/background.png';
import { globalState } from '../shared/states/global';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const { auth } = useContext(globalState);

  useEffect(() => {
    if (auth.isLogged) {
      navigate('/');
    }
  }, [auth.isLogged]);

  return (
    <>
      <Header />
      <Page
        center
        backgroundImage={Background}
      >
        <SignupContainer />
      </Page>
    </>
  );
};
