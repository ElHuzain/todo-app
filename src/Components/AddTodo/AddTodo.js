import { StyledAddTodo } from './AddTodo.style';
import StyledText from '../Styled/Text.styled';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../ActionCreators';

const AddTodo = () => {
  const [state, setState] = useState('');

  const dispatcher = useDispatch()

  function handleChange(e) {
    const value = e.target.value;
    setState(value);
  }

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     if (e.key === 'Enter') {
  //       console.log("Eyes");
  //       handleClick();
  //     }
  //   })
  // }, [])


  function handleClick() {
    if (state == '') return;
    const title = state;
    dispatcher(addTodo(title));
    setState('');
  }

  return (
    <StyledAddTodo gap="1">
      <input onChange={handleChange} value={state} placeholder="Type Something.." />
      <StyledText onClick={handleClick}>ADD</StyledText>
    </StyledAddTodo>
  )
}

export default AddTodo
