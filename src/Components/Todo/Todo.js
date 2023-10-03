import { StyledTodo } from './Todo.styled';
import { StyledCircle, StyledActivatedCircle } from '../Styled/Circle.styled';
import { useState } from 'react';

import { StyledFlex } from '../Styled/Flex.styled';
import StyledText from '../Styled/Text.styled';
import { styled } from 'styled-components';

import { useDispatch } from 'react-redux';
import { addTodo, removeTodo, switchTodoCompletion } from '../../ActionCreators';

const Punja = styled(StyledText)`

color: ${(props) => props.isCompleted ? props.theme.colors.theme.brightText : props.theme.colors.theme.text} !important;
`

const Todo = (props) => {
    const [crossVisibility, setCrossVisibiliy] = useState(false);

    const dispatcher = useDispatch();

    const mouseOver = () => {
        setCrossVisibiliy(true);
    }
    const mouseOut = () => {
        setCrossVisibiliy(false);
    }

    function handleFinish() {
        dispatcher(switchTodoCompletion(props.todoId));
    }

    return (
        // <Draggable index={props.id} draggableId={props.id}>
        // {(provided) => {
        <StyledTodo onClick={handleFinish} onMouseLeave={mouseOut} onMouseOver={mouseOver}>
            <StyledFlex gap='1'>
                {
                    props.isCompleted
                        ? <StyledActivatedCircle onClick={handleFinish}>< img src='./images/icon-check.svg' /></StyledActivatedCircle>
                        : <StyledCircle onClick={handleFinish}></StyledCircle>
                }

                <Punja isCompleted={props.isCompleted} decoration={props.isCompleted ? 'line-through' : 'none'}>{props.title}</Punja>
            </StyledFlex>
            <img src='./images/icon-cross.svg' onClick={() => dispatcher(removeTodo(props.todoId))} className={crossVisibility ? 'visible cross' : 'cross'} />
        </StyledTodo >
        // }}
        // </Draggable>
    )
}

export default Todo
