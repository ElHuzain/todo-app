import { StyledTodoList } from './TodoList.styled';
import Todo from '../Todo/Todo';

import Controls from '../Controls/Controls';

import { useSelector } from 'react-redux';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = () => {

    const notes = useSelector(val => val.notes);
    const filter = useSelector(val => val.filter);

    const elements = notes.map((element, index) => {
        if (filter) {
            if (filter == 'all') return <Todo key={index} todoId={element.id} title={element.title} isCompleted={element.isCompleted} />
            else if (filter == 'completed' && element.isCompleted) return <Todo key={index} todoId={element.id} title={element.title} isCompleted={element.isCompleted} />
            else if (filter == 'active' && !element.isCompleted) return <Todo key={index} todoId={element.id} title={element.title} isCompleted={element.isCompleted} />
        }
    })

    return (
        <StyledTodoList>
            <div className='list'>
                {elements.length < 1 ? <p>Nothing here :)</p> : elements}
            </div>
            <Controls />
        </StyledTodoList >
    )
    // return (
    //     <DragDropContext>
    //         <Droppable droppableId="droppable">
    //             {(provided, snapshot) => (
    //                 <div
    //                     {...provided.droppableProps}
    //                     ref={provided.innerRef}
    //                 >
    //                     {items.map((item, index) => (
    //                         <Draggable key={item.id} draggableId={item.id} index={index}>
    //                             {(provided, snapshot) => (
    //                                 <div
    //                                     ref={provided.innerRef}
    //                                     {...provided.draggableProps}
    //                                     {...provided.dragHandleProps}
    //                                 >
    //                                     {item.content}
    //                                 </div>
    //                             )}
    //                         </Draggable>
    //                     ))}
    //                     {provided.placeholder}
    //                 </div>
    //             )}
    //         </Droppable>
    //     </DragDropContext>
    // )
}

export default TodoList
