/* eslint-disable react-hooks/exhaustive-deps */
import { TasksContainer } from '../elements/tasks/containers';
import { Header } from '../elements/header';
import { Page } from '../shared/components/page';
import { Typography } from '../shared/components/typography';
import { useContext, useEffect } from 'react';
import { globalState } from '../shared/states/global';
import { useNavigate } from 'react-router-dom';
import { IsAuthenticated } from '../elements/isAuthenticated/components';

export const Home = () => {
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
            Tasks Board
          </Typography>

          <TasksContainer />
        </IsAuthenticated>
      </Page>
    </>
  );
};
