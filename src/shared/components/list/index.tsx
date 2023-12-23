import { Draggable, DroppableProvided } from 'react-beautiful-dnd';
import './index.styles.css';
import { ItemType } from '../../definitions/item';
import { Item } from '../item/index';

type ListProps = {
  items: ItemType[];
  loading: boolean;
  onComplete: (itemId: string) => void;
  onEdit: (item: ItemType) => void;
  completeId?: string | null;
  provided: DroppableProvided;
  sectionName: string;
};

export const List = (props: ListProps) => {
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
          return (
            <Draggable
              key={item.itemId}
              draggableId={item.itemId}
              index={index}
            >
              {(providedDrag) => (
                <Item
                  key={item.itemId}
                  data={item}
                  onComplete={onComplete}
                  onEdit={onEdit}
                  provided={providedDrag}
                  completeId={completeId}
                />
              )}
            </Draggable>
          );
        })}

        {provided.placeholder}
      </section>
    </div>
  );
};
