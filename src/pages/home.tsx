import { TasksContainer } from '../elements/tasks/containers';
import { Header } from '../elements/header';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <TasksContainer />
      </main>
    </>
  );
};
