import { TasksContainer } from '../elements/tasks/containers';
import { Header } from '../elements/header';
import { Page } from '../shared/components/page';
import { Typography } from '../shared/components/typography';

export const Home = () => {
  return (
    <>
      <Header />
      <Page>
        <Typography component='h4' className='mb-4'>
          Tasks Board
        </Typography>

        <TasksContainer />
      </Page>
    </>
  );
};
