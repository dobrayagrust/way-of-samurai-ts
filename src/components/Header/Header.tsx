import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt={""}
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/C.P._Company_logo.svg/1280px-C.P._Company_logo.svg.png"}/>
        </header>

    );
}

export default Header;