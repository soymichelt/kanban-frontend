/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { Header } from '../elements/header';
import { Page } from '../shared/components/page';
import { useContext, useEffect } from 'react';
import { globalState } from '../shared/states/global';
import { Typography } from '../shared/components/typography';
import { IsAuthenticated } from '../elements/isAuthenticated/components';

export const Profile = () => {
  const navigate = useNavigate();
  const { auth } = useContext(globalState);

  useEffect(() => {
    if (!auth.isLogged) {
      navigate('/signin');
    }
  }, [auth.isLogged]);

  return (
    <>
      <Header />
      <Page>
        <IsAuthenticated>
          <Typography component='h4' className='mb-4'>
            Personal Profile
          </Typography>
        </IsAuthenticated>
      </Page>
    </>
  );
};
