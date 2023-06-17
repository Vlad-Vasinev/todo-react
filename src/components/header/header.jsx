import React from "react";

import classes from './header.module.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className= { classes.header }>
            <ul>
                <li>
                    <Link to="/List"> List </Link>
                </li>
                {/* <li>
                    <Link to="/PageSecond"> List of ToDoDeals </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Header;