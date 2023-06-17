import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CounterReducer } from "../../store/counterReducer";

const Counter = () => {

    const dispatch = useDispatch();
    const cashData = useSelector(state => state.myCash);

    return (
        <div>
            <h2> { cashData } </h2>
            <button 
            onClick = { () => dispatch( { type: "ADD_CASH", payload: 1 } ) }
            > add cash </button>
            <button
            onClick = { () =>  dispatch( { type: "DEL_CASH", payload: 1 } ) }
            > remove cash </button>
        </div>
    )
}

export default Counter;