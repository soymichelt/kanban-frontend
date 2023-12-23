import { CloseRounded } from '@mui/icons-material';
import './index.styles.css';
import { IconButton } from '../iconButton';

export type ModalProps = {
  title: string;
  acceptButtonText?: string;
  onAccept?: () => void;
  cancelButtonText?: string;
  onClose?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactElement | Array<React.ReactElement> | string | number;
};

export const Modal = (props: ModalProps) => {
  const {
    title,
    acceptButtonText,
    onAccept,
    cancelButtonText,
    onClose,
    children,
  } = props;

  return (
    <div className={`overlay`}>
      <div className={`modal`}>
        <header className={`modal__header`}>
          <h2>{title}</h2>
          <IconButton onClick={onClose}>
            <CloseRounded />
          </IconButton>
        </header>
        <div className={`modal__body`}>
          {children}
        </div>
        <footer className={`modal__footer`}>
          <button onClick={onAccept}>
            {acceptButtonText ? acceptButtonText : 'Aceptar'}
          </button>
          <button onClick={onClose}>
            {cancelButtonText ? cancelButtonText : 'Cancelar'}
          </button>
        </footer>
      </div>
    </div>
  );
};
