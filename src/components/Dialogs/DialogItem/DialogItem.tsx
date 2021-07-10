import {DialogsType} from "../../../redux/state";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type dialogItemProps = {
    dialogs: DialogsType;

}

const DialogItem = (props: dialogItemProps) => {
    let path = "/dialog/" + props.dialogs.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.dialogs.name}</NavLink>
        </div>
    )
}

export default DialogItem;