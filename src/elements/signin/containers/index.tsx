import { useContext } from 'react';
import { signin } from '../../../services/users';
import { useField } from '../../../shared/hooks/useField';
import { Signin } from '../components';
import { globalState } from '../../../shared/states/global';
import { useNavigate } from 'react-router-dom';

export const SigninContainer = () => {
  const { setAuth } = useContext(globalState);
  const navigate = useNavigate();

  const usernameField = useField('');
  const passwordField = useField('');

  const handleSigninClick = () => {
    if (usernameField.isEmpty() || passwordField.isEmpty()) {
      return;
    }

    signin(usernameField.value as string, passwordField.value as string)
      .then(data => {
        setAuth({
          isLogged: true,
          myAccount: data
        });
        navigate('/');
      })
      .catch(error => console.log(error));
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
