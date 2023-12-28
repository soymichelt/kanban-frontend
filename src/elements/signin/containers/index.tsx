import { useContext } from 'react';
import { signin } from '../../../services/users';
import { useField } from '../../../shared/hooks/useField';
import { Signin } from '../components';
import { globalState } from '../../../shared/states/global';
import { useNavigate } from 'react-router-dom';
import { LOADING, useDataProvider } from '../../../shared/hooks/useDataProvider';

export const SigninContainer = () => {
  const { setAuth } = useContext(globalState);
  const navigate = useNavigate();

  const usernameField = useField('');
  const passwordField = useField('');
  const { state, ...signinAction } = useDataProvider(false);

  const handleSigninClick = () => {
    if (usernameField.isEmpty() || passwordField.isEmpty()) {
      return;
    }

    signinAction.loading();
    signin(usernameField.value as string, passwordField.value as string)
      .then(data => {
        signinAction.success();
        setAuth({
          isLogged: true,
          myAccount: data
        });
        navigate('/');
      })
      .catch(error => {
        signinAction.catch(error);
        console.log(error);
      });
  };

  return (
    <Signin
      username={usernameField.value}
      onUsernameChange={usernameField.onChange}
      password={passwordField.value}
      onPasswordChange={passwordField.onChange}
      onSigninClick={handleSigninClick}
      isLoading={state.statusData === LOADING}
    />
  );
};
