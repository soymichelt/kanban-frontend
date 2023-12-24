import { Header } from '../elements/header';
import { SigninContainer } from '../elements/signin/containers';
import { Page } from '../shared/components/page';
import Background from '../assets/background.png';

export const Signin = () => {
  return (
    <>
      <Header />
      <Page
        center
        backgroundImage={Background}
      >
        <SigninContainer />
      </Page>
    </>
  );
};
