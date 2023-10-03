import { StyledTodoContainer } from './TodoContainer.styled';
import AddTodo from '../AddTodo/AddTodo';
import StyledText from '../Styled/Text.styled';

import Controls from '../Controls/Controls';

import TodoList from '../TodoList/TodoList';

const TodoContainer = () => {
  return (
    <StyledTodoContainer>
      <AddTodo />
      <TodoList />
      {/* <TodoList/> */}
    </StyledTodoContainer>
  )
}

export default TodoContainer
