import { Header } from '../elements/header';
import { SignupContainer } from '../elements/signup/containers';
import { Page } from '../shared/components/page';
import Background from '../assets/background.png';

export const Signup = () => {
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
