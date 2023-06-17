
const myStore = {
    myCash: 0,
}

const CounterReducer = (state = myStore, action) => {
    switch (action.type) {
        case ("ADD_CASH"):
            return {
                ...state, myCash: state.myCash + action.payload
            }
        case ("DEL_CASH"):
            return {
                ...state, myCash: state.myCash - action.payload
            }
        default:
            return state
    }
}

export default CounterReducer;