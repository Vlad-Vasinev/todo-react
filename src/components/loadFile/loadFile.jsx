import { getQueriesForElement } from "@testing-library/react";
import React from "react";

import { useState } from "react";

import classes from './loadFile.module.css';
import imgPath from '../../images/wine.png';

const fileReader = new FileReader();

const LoadFile = () => {

    const [url, setUrl] = useState();

    function getFile(Event) {
        Event.preventDefault();
        const file = Event.target.files[0];
        fileReader.readAsDataURL(file);

        console.log(file.type);

        fileReader.onload = () => {
            setUrl(fileReader.result);
        }

    }

    return (
        <div className={classes.formWrapper}>
            <form className={classes.form}>
                <input
                    onChange={getFile}
                    type="file" placeholder="load file here"></input>
            </form>
            <div className={classes.imgList}>
                <img src={ url } alt="загруженная картинка"></img>
            </div>
        </div>
    )
}

export default LoadFile; 


//onloadend; for fileReader