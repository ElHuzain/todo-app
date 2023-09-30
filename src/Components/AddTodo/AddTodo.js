import { StyledAddTodo } from './AddTodo.style';
import StyledText from '../Styled/Text.styled';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../ActionCreators';

const AddTodo = () => {
  const [state, setState] = useState('');

  const dispatcher = useDispatch()

  function handleChange(e) {
    const value = e.target.value;
    setState(value);
  }

  function handleClick(e) {
    if(state == '') return;
    const title = state;
    dispatcher(addTodo(title));
    setState('');
  }

  return (
    <StyledAddTodo gap="1">
      <input onChange={handleChange} value={state} placeholder="Type somethin'.." />
      <StyledText onClick={handleClick}>ENTER</StyledText>
    </StyledAddTodo>
  )
}

export default AddTodo
