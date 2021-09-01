import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
} from "../../redux/store";
import {
    newTextMessageActionCreator,
    sendTextMessageActionCreator,
} from "../../redux/dialogspage_reducer"

type dialogsPropsType = {
    messagesPage: DialogsPageType
    // sendMessageCallback: (messagesText: string) => void
    // newMessageTextCallback: (messagesText: string) => void
    dispatch: (action: ActionsTypes) => void

}

export const Dialogs = React.memo((props: dialogsPropsType) => {

    const dialogsElements = props.messagesPage.dialogs.map(dialogs =>
        <DialogItem dialogs={dialogs}/>)
    const messagesElements = props.messagesPage.messages.map(message =>
        <Message message={message}/>)

    const sendMessage = () => {
        // props.dispatch({type: 'SEND-TEXT-MESSAGE'})
        props.dispatch(sendTextMessageActionCreator())
        /*        if (newMessageElement.current) {
                    const text = newMessageElement.current.value
                    props.sendMessageCallback(text)
                    newMessageElement.current.value = ""
                }*/
    }

    const newMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const messageText = event.currentTarget.value
        props.dispatch(newTextMessageActionCreator(messageText))
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
                <textarea placeholder={"Enter your message..."}
                          onKeyPress={onKeyPressEnter}
                          onChange={newMessageChange}
                          value={props.messagesPage.textForNewMessage}
                />
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
})