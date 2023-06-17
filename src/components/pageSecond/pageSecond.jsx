import React from "react";
import { useSelector } from "react-redux";

import { v4 as uuidv4 } from 'uuid';

import Header from "../header/header";
import { Button } from 'antd';

import { delCustomData } from "../../store/listReducer";
import { useDispatch } from "react-redux";

const PageSecond = () => {

    // const dispatch = useDispatch();

    const userChoosen = useSelector(choosen => choosen.list.chooseEl);

    return (
        <div style={{ marginTop: "150px", backgroundColor: "Highlight", padding: "40px", display: "flex", alignItems: "top", justifyContent: "center", paddingTop: "40px" }}>
            <Header></Header>
            <div style={{ marginLeft: "20px", minWidth: "300px" }}>
                {
                    userChoosen.map(item =>
                        <div style={{backgroundColor: "Highlight"}} key={uuidv4()}>
                            <p style={{ backgroundColor: "#DD9E00", maxWidth: "max-content" }}>name of task: <span style={{ backgroundColor: "#A8E000" }}>{item.name}</span> </p>
                            <span> id: {item.id} </span>
                            <div>
                                <img src={item.image} />
                            </div>
                            {/* <Button onClick={() => dispatch(delCustomData(item.id))} style={{ marginLeft: "20px", backgroundColor: "#EA4A00" }} type="primary"> Delete this task :D</Button> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PageSecond;