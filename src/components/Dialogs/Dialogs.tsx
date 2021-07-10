import React from "react";
import classes from "./Dialogs.module.css";
// import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/message";
import {DialogsPageType} from "../../redux/state";

type dialogsPropsType = {
    messagesPage: DialogsPageType;


}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialogs => <DialogItem
        dialogs={dialogs}/>);
    let messagesElements = props.messagesPage.messages.map(message => <Message
        message={message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;


