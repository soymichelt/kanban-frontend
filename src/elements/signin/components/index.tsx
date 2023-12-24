import { Link } from 'react-router-dom';
import { Button } from '../../../shared/components/button';
import { Logo } from '../../../shared/components/logo';
import { Panel } from '../../../shared/components/panel';
import { TextField } from '../../../shared/components/textField';
import './index.styles.css';
import { Typography } from '../../../shared/components/typography';

export type SigninProps = {
  title?: string;
};

export const Signin = (props: SigninProps) => {
  const {
    title = 'Iniciar sesion',
  } = props;
  console.log(title);

  return (
    <Panel className='signin-panel'>
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
      />

      <TextField
        label={`Contraseña`}
        placeholder={`Contraseña`}
      />

      <Link to='/' className={`mb-4`}>
        ¿Has olvidado tu Contraseña?
      </Link>

      <Button
        fullwidth
        className='mb-4'
      >
        Iniciar Sesión
      </Button>

      <Button
        fullwidth
        className='mb-4'
        variant='secondary'
      >
        Regístrate
      </Button>
    </Panel>
  );
};
