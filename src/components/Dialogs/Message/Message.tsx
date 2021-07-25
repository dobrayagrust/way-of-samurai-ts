import {MessageType} from "../../../redux/state";
import classes from "../Dialogs.module.css";
import React from "react";


type messagePropsType = {
    message: MessageType;
}

const Message = (props: messagePropsType) => {
    return (
        <div>
            <div className={classes.dialog}>{props.message.message}</div>

        </div>
    )
}


export default Message