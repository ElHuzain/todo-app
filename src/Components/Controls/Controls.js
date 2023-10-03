import { StyledControls } from './Controls.styled'

import TextButton from '../Styled/TextButton.styled';
import { styled } from 'styled-components';
import { StyledFlex } from '../Styled/Flex.styled';
import Text from '../Styled/Text.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, clearCompleted } from '../../ActionCreators';

const Punjo = styled(TextButton)`

color: ${({ theme }) => theme.colors.theme.brightText};

${props => props.chosen && ('color: ' + props.theme.colors.primary.unchecked + ';')}

&:hover {
  color: ${props => !props.chosen && props.theme.colors.theme.text};
}
`

const Controls = () => {

  const data = useSelector(val => val.notes);
  const length = data.filter(val => !val.isCompleted).length
  const filter = useSelector(val => val.filter);
  const dispatcher = useDispatch();

  const changeFilter = (f) => dispatcher(setFilter(f))

  return (
    <StyledControls>
      <Text>{length} items left</Text>
      <StyledFlex gap="1">
        <Punjo onClick={() => changeFilter('all')} chosen={filter == 'all' && true} >All</Punjo>
        <Punjo onClick={() => changeFilter('completed')} chosen={filter == 'completed' && true}>Completed</Punjo>
        <Punjo onClick={() => changeFilter('active')} chosen={filter == 'active' && true}>Active</Punjo>
      </StyledFlex>
      <Punjo onClick={() => dispatcher(clearCompleted())} >Clear Completed</Punjo>
    </StyledControls>
  )
}

export default Controls
