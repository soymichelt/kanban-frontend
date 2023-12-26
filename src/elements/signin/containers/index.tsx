import { useField } from '../../../shared/hooks/useField';
import { Signin } from '../components';

export const SigninContainer = () => {
  const usernameField = useField('');
  const passwordField = useField('');

  const handleSigninClick = () => {
    console.log('Signin data >>> ', usernameField.value, passwordField.value);
  };

  return (
    <Signin
      username={usernameField.value}
      onUsernameChange={usernameField.onChange}
      password={passwordField.value}
      onPasswordChange={passwordField.onChange}
      onSigninClick={handleSigninClick}
    />
  );
};
