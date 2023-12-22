import './index.styles.css';

type HeaderProps = {
  onCreate?: () => void;
};

export const Header = (props: HeaderProps) => {
  const { onCreate } = props;

  return (
      <header className={'header'}>
          <h1>SoymichelDev <span>Board</span></h1>
          
          <div>
              <button className='btn-primary' onClick={onCreate}>
                  Añadir Tarea
              </button>
          </div>
      </header>
  );
};