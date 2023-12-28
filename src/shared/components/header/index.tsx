import { Link } from 'react-router-dom';
import './index.styles.css';

type HeaderProps = {
  isLogged?: boolean;
  onCreate?: () => void;
  onSignout?: () => void;
};

export const Header = (props: HeaderProps) => {
  const {
    isLogged = false,
    onCreate,
    onSignout,

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
            <Link className='menu-item' to={'/profile'}>
              My Account
            </Link>
            <button className='menu-item' onClick={onSignout}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link className='menu-item' to={'/signin'}>
              Iniciar Sesión
            </Link>
            <Link className='menu-item' to={'/signup'}>
              Regístrate
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
