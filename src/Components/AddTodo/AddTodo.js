import { StyledAddTodo } from './AddTodo.style';
import TextButton from '../Styled/TextButton.styled';
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

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     if (e.key === 'Enter') {
  //       console.log("Eyes");
  //       handleClick();
  //     }
  //   })
  // }, [])

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleClick();
    } else if (e.key === 'Escape') {
      setState('');
    }
  }


  function handleClick() {
    if (state == '') return;
    const title = state;
    dispatcher(addTodo(title));
    setState('');
  }

  return (
    <StyledAddTodo gap="1">
      <input onChange={handleChange} value={state} placeholder="Type Something.." onKeyDown={handleKeyDown} />
      <TextButton stateful disabled={state.length === 0} onClick={handleClick}>ADD</TextButton>
    </StyledAddTodo>
  )
}

export default AddTodo
