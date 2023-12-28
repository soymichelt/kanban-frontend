import { useNavigate } from 'react-router-dom';
import { signup } from '../../../services/users';
import { useField } from '../../../shared/hooks/useField';
import { Signup } from '../components';
import { useContext } from 'react';
import { globalState } from '../../../shared/states/global';

export const SignupContainer = () => {
  const { setAuth } = useContext(globalState);
  const navigate = useNavigate();

  const emailField = useField('');
  const phoneField = useField('');
  const usernameField = useField('');
  const passwordField = useField('');

  const handleSignupClick = () => {
    signup({
      email: emailField.value as string,
      phone: phoneField.value as string,
      username: usernameField.value as string,
      password: passwordField.value as string,

    })
      .then((data) => {
        setAuth({
          isLogged: true,
          myAccount: data,
        });
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <Signup
      email={emailField.value}
      onEmailChange={emailField.onChange}
      phone={phoneField.value}
      onPhoneChange={phoneField.onChange}
      username={usernameField.value}
      onUsernameChange={usernameField.onChange}
      password={passwordField.value}
      onPasswordChange={passwordField.onChange}
      onSignupClick={handleSignupClick}
    />
  );
};
