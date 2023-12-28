import { Link } from 'react-router-dom';
import { Button } from '../../../shared/components/button';
import { Logo } from '../../../shared/components/logo';
import { Panel } from '../../../shared/components/panel';
import { TextField } from '../../../shared/components/textField';
import './index.styles.css';
import { Typography } from '../../../shared/components/typography';

export type SigninProps = {
  className?: string | undefined;
  onUsernameChange?: React.ChangeEventHandler<HTMLInputElement>;
  username?: string;
  onPasswordChange?: React.ChangeEventHandler<HTMLInputElement>;
  password?: string | undefined;
  onSigninClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Signin = (props: SigninProps) => {
  const {
    className,
    onUsernameChange,
    username,
    onPasswordChange,
    password,
    onSigninClick,
  } = props;

  return (
    <Panel className={`signin-panel ${className}`}>
      <Logo
        className={`mt-4 center`}
        size='sm'
      />

      <Typography component='h4' className='center mt-4 mb-0' bold color='primary'>
        Hola, Bienvenido
      </Typography>

      <Typography component='h5' className='center mt-2 mb-5' thin color='gray'>
        Ingresa tus credenciales para continuar
      </Typography>

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

      <Link to='/' className={`mb-4`}>
        ¿Has olvidado tu Contraseña?
      </Link>

      <Button
        fullwidth
        className='mb-4'
        onClick={onSigninClick}
      >
        Iniciar Sesión
      </Button>

      <Button
        fullwidth
        className='mb-4'
        variant='secondary'
      >
        ¿Aún no tienes cuenta? Regístrate
      </Button>
    </Panel>
  );
};
