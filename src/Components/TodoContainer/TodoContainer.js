import { StyledTodoContainer } from './TodoContainer.styled';
import AddTodo from '../AddTodo/AddTodo';
import TextButton from '../Styled/TextButton.styled';

import Controls from '../Controls/Controls';

import TodoList from '../TodoList/TodoList';

const TodoContainer = () => {
  return (
    <StyledTodoContainer>
      <AddTodo />
      <TodoList />
    </StyledTodoContainer>
  )
}

export default TodoContainer
