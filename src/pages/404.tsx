import { Header } from '../elements/header';
import { Page } from '../shared/components/page';
import { NotFound404 } from '../shared/components/404';

export const Page404 = () => {
  return (
    <>
      <Header />
      <Page center>
        <NotFound404 />
      </Page>
    </>
  );
};
