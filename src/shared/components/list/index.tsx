import { Draggable, DroppableProvided } from 'react-beautiful-dnd';
import './index.styles.css';
import CompleteIcon from './../../../assets/complete-icon-blue.svg';
import EditIcon from './../../../assets/edit-icon-blue.svg';
import { ItemType } from '../../definitions/item';

type SectionListProps = {
  items: ItemType[];
  loading: boolean;
  onComplete: (itemId: string) => void;
  onEdit: (item: ItemType) => void;
  completeId?: string;
  provided: DroppableProvided;
  sectionName: string;
};

export const List = (props: SectionListProps) => {
  const {
    items,
    loading,
    onComplete,
    onEdit,
    completeId,
    provided,
    sectionName,
} = props;

  return (
    <div className='todo-container'>
        <section
            className={`todo ${loading ? 'todo-loading' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
        >
            <header className='todo-container-title'>
                {sectionName}
            </header>
            {(items && items.length > 0) && items.map((item, index) => {
                const completing = completeId === item.itemId;
                return (
                    <Draggable
                        key={item.itemId}
                        draggableId={item.itemId}
                        index={index}
                    >
                        {(providedDrag) => (
                            <article
                                className={`todo-item ${item.itemState === 4 ? 'todo-completed' : ''}`}
                                ref={providedDrag.innerRef}
                                {...providedDrag.draggableProps}
                                {...providedDrag.dragHandleProps}
                            >
                                <div className='todo-item-contenido'>
                                    <h2>{item.itemCreator}</h2>
                                    <p>{item.itemDescription}</p>
                                </div>
                                <div className='todo-item-actions'>
                                    {item.itemState !== 5 && (
                                        <button
                                            className='btn'
                                            onClick={() => onComplete(item.itemId)}
                                            disabled={completing}
                                        >
                                            <img src={CompleteIcon} alt='Complete Icon' />
                                        </button>
                                    )}
                                    <button
                                        className='btn'
                                        onClick={() => onEdit(item)}
                                    >
                                        <img src={EditIcon} alt='Edit Icon' />
                                    </button>
                                </div>
                            </article>
                        )}
                    </Draggable>
                );
            })}

            {provided.placeholder}
        </section>
    </div>
  );
};