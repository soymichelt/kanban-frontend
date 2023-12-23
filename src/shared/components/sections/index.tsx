import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { List } from '../list';
import './index.styles.css';
import { ItemType } from '../../definitions/item';
import { SectionType } from '../../definitions/section';

export type SectionsProps = {
  sectionList: SectionType[];
  onDragEnd: (result: DropResult) => void;
  items: ItemType[];
  loading: boolean;
  onComplete: (itemId: string) => void;
  onEdit: (item: ItemType) => void;
  completeId?: string;
};

export const Sections = (props: SectionsProps) => {
  const {
    sectionList,
    onDragEnd,
    items,
    loading,
    onComplete,
    onEdit,
    completeId,
  } = props;

  return (
    <DragDropContext onDragEnd={(result) => {
        onDragEnd(result);
    }}>
      <div className='todo-sections-container'>
        {sectionList && sectionList.map(section => {
          console.log(section);
          return (
            <Droppable
              key={section.sectionId}
              droppableId={section.sectionId}
            >
              {(provided) => (
                  <List
                      sectionName={section.name}
                      items={items?.filter(item => {
                          return String(item.itemState) === section.sectionId;
                      })}
                      loading={loading}
                      onComplete={onComplete}
                      onEdit={onEdit}
                      completeId={completeId}
                      provided={provided}
                  />
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};