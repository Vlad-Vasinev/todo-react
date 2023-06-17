
import { v4 as uuidv4 } from 'uuid';

const listState = {
    listArray: [
        {
            name: "first deal to wash the floor", duty: "brothers and sisters", id: uuidv4(),
        },
        {
            name: "second deal to walk with our dog", duty: "our siblings", id: uuidv4(),
        },
        {
            name: "third deal to take out garbage", duty: "our relatives", id: uuidv4(),
        }
    ],
    chooseEl: [
        {

        },
    ],
}

const ADD_USER = "ADD_USER";
const ADD_DATA = "ADD_DATA";
const DEL_DATA = "DEL_DATA";
const CHOOSE_EL = "CHOOSE_EL";
const EDIT_NAME = "EDIT_NAME";

export const ListReducer = (state = listState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state, listArray: [...state.listArray, { name: action.payload, duty: "new_duty", id: uuidv4(), }]
            }
        case ADD_DATA:
            return {
                ...state, listArray: [...state.listArray, action.payload]
            }
        case EDIT_NAME:
            console.log(action.payload.name)
            console.log(action.payload.idOf)
            return {
                ...state, listArray: [...state.listArray.map(todo => todo.id === action.payload.idOf ? {
                    ...todo,
                    name: action.payload.name
                }
                    : todo)]
            }
        case DEL_DATA:
            return {
                ...state, listArray: [...state.listArray.filter(el => el.id !== action.payload)]
            }
        case CHOOSE_EL:
            return {
                ...state, chooseEl: [...state.chooseEl, action.payload]
            }
        default:
            return state
    }
}

export const addCustomUser = (payload) => {
    return { type: "ADD_USER", payload }
}

export const addCustomData = (payload) => {
    return { type: "ADD_DATA", payload }
}

export const delCustomData = (payload) => {
    return { type: "DEL_DATA", payload }
}

export const chooseData = (payload) => {
    return { type: "CHOOSE_EL", payload }
}

export const editName = (payload) => {
    return { type: "EDIT_NAME", payload }
}