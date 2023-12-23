import { DraggableProvided } from 'react-beautiful-dnd';
import CompleteIcon from './../../../assets/complete-icon-blue.svg';
import EditIcon from './../../../assets/edit-icon-blue.svg';
import './index.styles.css';
import { ItemType } from '../../definitions/item';

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
      className={`todo-item ${data.itemState === 4 ? 'todo-completed' : ''}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className='todo-item-contenido'>
        <h2>{data.itemCreator}</h2>
        <p>{data.itemDescription}</p>
      </div>
      <div className='todo-item-actions'>
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