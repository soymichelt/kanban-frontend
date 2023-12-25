import { Button } from '../../../shared/components/button';
import { Logo } from '../../../shared/components/logo';
import { Panel } from '../../../shared/components/panel';
import { TextField } from '../../../shared/components/textField';
import { Typography } from '../../../shared/components/typography';
import './index.styles.css';

export type SignupProps = {
  className?: string;
};

export const Signup = (props: SignupProps) => {
  const {
    className,
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
      />

      <TextField
        label={`Teléfono`}
        placeholder={`Número telefónico`}
      />

      <TextField
        label={`Usuario`}
        placeholder={`Nombre de usuario`}
      />

      <TextField
        label={`Contraseña`}
        placeholder={`Contraseña`}
      />

      <Button
        fullwidth
        className='mb-4'
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
