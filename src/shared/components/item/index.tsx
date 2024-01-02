import { DraggableProvided } from 'react-beautiful-dnd';
import CompleteIcon from './../../../assets/complete-icon-blue.svg';
import EditIcon from './../../../assets/edit-icon-blue.svg';
import './index.styles.css';
import { ItemType } from '../../definitions/item';
import PersonIcon from '@mui/icons-material/Person';

type ItemProps = {
  provided: DraggableProvided;
  data: ItemType;
  onComplete: (itemId: string) => void;
  onEdit: (item: ItemType) => void;
  completeId?: string | null;
};

export const Item = (props: ItemProps) => {
  const {
    provided,
    data,
    onComplete,
    onEdit,
    completeId,
  } = props;

  const completing = completeId === data.itemId;

  return (
    <article
      className={`item-element ${data.itemState === 4 ? 'item-element--completed' : ''}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className='item-element__content'>
        <h2 className='item-element__header'>
          <span className='item-element__header-image'>
            {data.itemCreator
              ? data.itemCreator.charAt(0)
              : <PersonIcon />
            }
          </span>
          {data.itemCreator || 'Unknown'}
        </h2>
        <p>{data.itemDescription}</p>
      </div>

      <div className='item-element__actions'>
          {data.itemState !== 4 && (
            <button
              className='btn'
              onClick={() => onComplete(data.itemId)}
              disabled={completing}
            >
              <img src={CompleteIcon} alt='Complete Icon' />
            </button>
          )}
          <button
            className='btn'
            onClick={() => onEdit(data)}
          >
            <img src={EditIcon} alt='Edit Icon' />
          </button>
      </div>
    </article>
  );
};
