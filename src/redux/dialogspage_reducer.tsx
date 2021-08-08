import {v1} from "uuid";
import {ActionsTypes, MessageType, PostsType} from "./state";


const SEND_TEXT_MESSAGE = 'SEND-TEXT-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export type SendMessageType = {
    type: 'SEND-TEXT-MESSAGE'
    // newMessage: string
}

export type NewMessageType = {
    type: 'NEW-MESSAGE-TEXT'
    messageText: string
}

const dialogsPageReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_TEXT_MESSAGE:
            const newMessage: MessageType = {
                id: v1(),
                message: state.textForNewMessage,
            }
            state.messages.push(newMessage)
            return state
        case NEW_MESSAGE_TEXT:
            state.textForNewMessage = action.messageText
            return state
        default: return state
    }
/*    if
    (action.type === SEND_TEXT_MESSAGE) {
        const newMessage: MessageType = {
            id: v1(),
            message: state.textForNewMessage,
        }
        state.messages.push(newMessage);
        // this._renderThree(this._state)
    } else if
    (action.type === NEW_MESSAGE_TEXT) {
        // this._state.dialogsPage.textForNewMessage = action.messageText
        state.textForNewMessage = action.messageText
        // this._renderThree(this._state)
    }*/
}

export const sendTextMessageActionCreator = (): SendMessageType => {
    return {
        type: 'SEND-TEXT-MESSAGE'
    }
}
export const newMessageTextActionCreator = (messageText: string): NewMessageType => {
    return {
        type: 'NEW-MESSAGE-TEXT',
        messageText: messageText
    }
}

export default dialogsPageReducer