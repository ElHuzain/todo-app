import StyledText from '../Styled/Text.styled';
import { StyledHeader } from './Header.styled';

import { switchTheme } from '../../ActionCreators';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const mode = useSelector(val => val.theme);
  const dispatcher = useDispatch();

  const Image = mode == 'dark' ? 'sun' : 'moon';
  const URL = `./images/icon-${Image}.svg`

  return (
    <StyledHeader>
      <StyledText color='hover' bold={true} fs="3">T O D O</StyledText>
      <img onClick={() => { dispatcher(switchTheme()) }} src={URL} />
    </StyledHeader>
  )
}

export default Header
