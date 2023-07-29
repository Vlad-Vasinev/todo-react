import React from "react";

import classes from './stateEl.module.css';

const StateEl = (props) => {
    return (
        <div className={classes.elWrapper}>
            <div className={classes.elContent}>
                <h2 className={classes.elTitle}>
                    State name: {props.name}
                    <span className={classes.elSubTitle}>
                        State code: {props.id}
                    </span>
                </h2>
                <div className={classes.elInfo}>
                    State population: {props.population}
                </div>
            </div>
        </div>
    )
}

export default StateEl;