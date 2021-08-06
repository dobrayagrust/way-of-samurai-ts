import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";

type dialogsPropsType = {
    messagesPage: DialogsPageType
    // sendMessageCallback: (messagesText: string) => void
    // newMessageTextCallback: (messagesText: string) => void
    dispatch: (action: ActionsTypes) => void

}

const Dialogs = (props: dialogsPropsType) => {

    const dialogsElements = props.messagesPage.dialogs.map(dialogs => <DialogItem
        dialogs={dialogs}/>);
    const messagesElements = props.messagesPage.messages.map(message => <Message
        message={message}/>);

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'})
        /*        if (newMessageElement.current) {
                    const text = newMessageElement.current.value
                    props.sendMessageCallback(text)
                    newMessageElement.current.value = ""
                }*/
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const messageText = event.currentTarget.value
        props.dispatch({type: "NEW-MESSAGE-TYPE", messageText})
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
                          onChange={changeHandler}
                />
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}


export default Dialogs;


