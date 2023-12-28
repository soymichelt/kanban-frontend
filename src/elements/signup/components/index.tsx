import { Button } from '../../../shared/components/button';
import { Logo } from '../../../shared/components/logo';
import { Panel } from '../../../shared/components/panel';
import { TextField } from '../../../shared/components/textField';
import { Typography } from '../../../shared/components/typography';
import './index.styles.css';

export type SignupProps = {
  className?: string;
  onUsernameChange?: React.ChangeEventHandler<HTMLInputElement>;
  username?: string;
  onEmailChange?: React.ChangeEventHandler<HTMLInputElement>;
  email?: string;
  onPhoneChange?: React.ChangeEventHandler<HTMLInputElement>;
  phone?: string;
  onPasswordChange?: React.ChangeEventHandler<HTMLInputElement>;
  password?: string;
  onSignupClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Signup = (props: SignupProps) => {
  const {
    className,
    onUsernameChange,
    username,
    onEmailChange,
    email,
    onPhoneChange,
    phone,
    onPasswordChange,
    password,
    onSignupClick,
  } = props;

  return (
    <Panel className={`signup-panel ${className}`}>
      <Logo
        className={`mt-4 center`}
        size='sm'
      />

      <Typography component='h4' className='center mt-4 mb-0' bold color='primary'>
        Hola, Bienvenido
      </Typography>

      <Typography component='h5' className='center mt-2 mb-5' thin color='gray'>
        Registra tus credenciales para continuar
      </Typography>

      <TextField
        label={`E - mail`}
        placeholder={`Correo electrónico`}
        value={email}
        onChange={onEmailChange}
      />

      <TextField
        label={`Teléfono`}
        placeholder={`Número telefónico`}
        value={phone}
        onChange={onPhoneChange}
      />

      <TextField
        label={`Usuario`}
        placeholder={`Nombre de usuario`}
        value={username}
        onChange={onUsernameChange}
      />

      <TextField
        label={`Contraseña`}
        placeholder={`Contraseña`}
        value={password}
        onChange={onPasswordChange}
        type={'password'}
      />

      <Button
        fullwidth
        className='mb-4'
        onClick={onSignupClick}
      >
        Crear Cuenta
      </Button>

      <Button
        fullwidth
        className='mb-4'
        variant='secondary'
      >
        ¿Ya tienes Cuenta? Inicia Sesión
      </Button>
    </Panel>
  );
};
