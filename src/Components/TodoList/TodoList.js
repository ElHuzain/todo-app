import { StyledTodoList } from './TodoList.styled';
import Todo from '../Todo/Todo';

import Controls from '../Controls/Controls';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Text from '../Styled/Text.styled';

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

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(notes));
    }, [notes])

    const Empty = <div style={{ margin: '60px auto' }}><Text>You currently have no notes.</Text></div>

    return (
        <StyledTodoList>
            <div className='list'>
                {elements.length < 1 ? Empty : elements}
            </div>
            <Controls />
        </StyledTodoList >
    )

}

export default TodoList
