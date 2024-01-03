/* eslint-disable react-hooks/exhaustive-deps */
import { TasksContainer } from '../elements/tasks/containers';
import { Page } from '../shared/components/page';
import { Typography } from '../shared/components/typography';
import { useContext, useEffect } from 'react';
import { globalState } from '../shared/states/global';
import { useNavigate } from 'react-router-dom';
import { IsAuthenticated } from '../elements/isAuthenticated/components';
import { HeaderContainer } from '../elements/header/containers';

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
      <HeaderContainer />
      <Page>
        <IsAuthenticated>
          <Typography component='h4' className='mt-0 mb-4'>
            Tasks Board
          </Typography>

          <TasksContainer />
        </IsAuthenticated>
      </Page>
    </>
  );
};
