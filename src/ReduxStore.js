import { createStore } from 'redux';

const initialState = {
    theme: 'dark',
    notes: [
        {
            id: 0,
            title: 'Going on & Under',
            isCompleted: false
        },
        {
            id: 1,
            title: 'Near, far.',
            isCompleted: true
        },
        {
            id: 2,
            title: 'Think about her just a bit more',
            isCompleted: true
        },
        {
            id: 3,
            title: 'Study integrals and the other thing',
            isCompleted: false
        },
        {
            id: 4,
            title: 'Rethink about her',
            isCompleted: false
        },
        {
            id: 5,
            title: 'Sleep & think bout\'er',
            isCompleted: true
        },
    ],
    filter: 'all'
}

function ApplicationReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'switchTheme': {
            return {
                ...state,
                theme: state.theme == 'dark' ? 'light' : 'dark'
            }
        }
        case 'addTodo': {
            const newTodo = {
                id: state.notes.length + 1,
                title: action.payload,
                isCompleted: false
            }
            return {
                ...state,
                notes: [...state.notes, newTodo]
            }
        }
        case 'removeTodo': {
            let newArr = [];
            state.notes.forEach(note => {
                if (action.payload != note.id) newArr.push(note);
            })

            return {
                ...state,
                notes: newArr
            };

        }
        case 'switchTodoCompletion': {
            let newArr = [];
            state.notes.forEach(note => {
                if (note.id === action.payload) newArr.push({ id: note.id, title: note.title, isCompleted: !note.isCompleted });
                else newArr.push(note);
            });
            return {
                ...state,
                notes: newArr
            }
        }
        case 'setFilter': {
            return {
                ...state,
                filter: action.payload
            }
        }
        case 'clearCompleted': {
            let newArr = [];
            state.notes.forEach(note => {
                if (!note.isCompleted) newArr.push(note)
            })
            return {
                ...state,
                notes: newArr
            }
        }
        default: return state
    }

}

let store = createStore(ApplicationReducer);

export default store;
