export const switchTheme = () => {return {type: 'switchTheme'}}

export const addTodo = (title) => {return {type: 'addTodo', payload: title}}

export const removeTodo = (index) => {return {type: 'removeTodo', payload: index}}

export const switchTodoCompletion = (index) => {return {type: 'switchTodoCompletion', payload: index}}

export const setFilter = (filter) => {return {type: 'setFilter', payload: filter}}

export const clearCompleted = () => {return {type: 'clearCompleted'}}