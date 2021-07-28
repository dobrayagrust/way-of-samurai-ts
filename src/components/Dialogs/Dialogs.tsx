import React, {KeyboardEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type dialogsPropsType = {
    messagesPage: DialogsPageType;
    sendMessageCallback: (messagesText: string) => void;
    newMessageTextCallback: (messagesText: string) => void;
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialogs => <DialogItem
        dialogs={dialogs}/>);
    let messagesElements = props.messagesPage.messages.map(message => <Message
        message={message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        if (newMessageElement.current) {
            const value = newMessageElement.current.value
            props.sendMessageCallback(value)
            newMessageElement.current.value = ""

        }
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter")
            sendMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          placeholder={"Add message..."}
                          onKeyPress={onKeyPressEnter}
                />
            </div>
            <div>
                <button onClick={sendMessage}></button>
            </div>
        </div>
    );
}


export default Dialogs;


