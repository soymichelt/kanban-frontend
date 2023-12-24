import { Header } from '../elements/header';
import { SigninContainer } from '../elements/signin/containers';
import { Page } from '../shared/components/page';

export const Signin = () => {
  return (
    <>
      <Header />
      <Page>
        <SigninContainer />
      </Page>
    </>
  );
};
