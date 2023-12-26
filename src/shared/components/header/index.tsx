import { Link } from 'react-router-dom';
import './index.styles.css';

type HeaderProps = {
  isLogged?: boolean;
  onCreate?: () => void;
};

export const Header = (props: HeaderProps) => {
  const {
    isLogged = false,
    onCreate,
  } = props;

  return (
    <header className={'header'}>
      <h2>
        <Link to={'/'}>SoymichelDev <span>Board</span></Link>
      </h2>

      <nav>
        {isLogged ? (
          <>
            <button className='btn-primary' onClick={onCreate}>
              Crear Tarea
            </button>
            <Link to={'/profile'}>
              My Account
            </Link>
            <Link to={'/signin'}>
              Cerrar Sesión
            </Link>
          </>
        ) : (
          <>
            <Link to={'/signin'}>
              Iniciar Sesión
            </Link>
            <Link to={'/signup'}>
              Regístrate
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
