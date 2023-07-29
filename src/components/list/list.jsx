import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from './list.module.css';

import { v4 as uuidv4 } from 'uuid';

import { addCustomUser } from "../../store/listReducer";
import { delCustomData } from "../../store/listReducer";

import { Button } from 'antd';

import Header from "../header/header";
import SvgFile from "../svgFile/svgFile";
import { editName } from "../../store/listReducer";

import states from './states.json';

const List = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.list.listArray);


    return (
        <div>
            <div style={{ backgroundColor: "linen", display: "flex", alignItems: "top", justifyContent: "center", paddingTop: "40px", paddingBottom: "40px" }}>
                <Header></Header>
                <div className={classes.listWrapper}>
                    {users.length ? users.map(el =>
                        <div
                            className={classes.item}
                            key={uuidv4()} >
                            <p style={{ backgroundColor: "#DD9E00", maxWidth: "max-content" }}>name of task: <span style={{ backgroundColor: "#A8E000" }}>{el.name}</span> </p>
                            <span> id: {el.id} </span>
                            <br></br>
                            <Button style={{ backgroundColor: "#00EAF2" }} type="primary" onClick={() => dispatch(editName({ name: prompt(), idOf: el.id }))} > Edit this task :D</Button>
                            <Button onClick={() => dispatch(delCustomData(el.id))} style={{ marginLeft: "20px", backgroundColor: "#EA4A00" }} type="primary"> Delete this task :D</Button>
                        </div>
                    )
                        : <div style={{ color: 'blue', textTransform: 'uppercase' }}> here is nothing </div>
                    }
                    <Button style={{ marginTop: "40px" }} onClick={() => dispatch(addCustomUser(prompt()))} type="primary">Add new task :D</Button>
                </div>
            </div>
            <SvgFile></SvgFile>
            {/* <div>
                    {
                        states.map(el => 
                            <div key = {el.id}>
                                {el.name}
                            </div>
                            )
                    }
            </div> */}
        </div>
    )
}

export default List;

