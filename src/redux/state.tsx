import {v1} from "uuid"
import {renderThree} from "../index";

export type MessageType = {
    id: string;
    message: string;
}
export type DialogsType = {
    id: string;
    name: string;
}
export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}
export type ProfilePageType = {
    messageForNewPost: string;
    posts: Array<PostsType>;
}
export type DialogsPageType = {
    textForNewMessage: string;
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type FriendsType = {
    id: string;
    name: string;
    avatarIcon: string;
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SidebarType;
}

let store = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: v1(), message: "My first post", likesCount: 10},
                {id: v1(), message: "How are you", likesCount: 33},
                {id: v1(), message: "My two post", likesCount: 11},
                {id: v1(), message: "My three post", likesCount: 999},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Dimych"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Sasha"},
                {id: v1(), name: "Viktor"},
                {id: v1(), name: "Valera"},
            ],
            textForNewMessage: "",
            messages: [
                {id: v1(), message: "Hi!"},
                {id: v1(), message: "How is your it-kamasutra?"},
                {id: v1(), message: "Yo!"},
                {id: v1(), message: "Yo!"},
                {id: v1(), message: "Yo!"},
            ],
        },
        sidebar: {
            friends: [
                {id: v1(), name: "Dimych", avatarIcon: ""},
                {id: v1(), name: "Andrey", avatarIcon: ""},
                {id: v1(), name: "Sveta", avatarIcon: ""},
            ],
        }
    },
    getState() {

        return this._state
    },
    _renderThree() {
        console.log("State changed")
    },
    addPost(postText: string) {
        debugger
        const newPost: PostsType = {
            id: v1(),
            message: postText,
            likesCount: 7,
        }
        this._state.profilePage.posts.push(newPost);
        // state.profilePage.messageForNewPost = ""
        renderThree(this._state);
        console.log(newPost)
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        renderThree(this._state);
    },
    sendMessage(messageText: string) {
        const newMessage: MessageType = {
            id: v1(),
            message: messageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        renderThree(this._state);
        console.log(newMessage)
    },
    newMessageText(messageText: string) {
        this._state.dialogsPage.textForNewMessage = messageText
        renderThree(this._state);
    },
    subscribe(observer: any) {
        this._renderThree = observer
    }
}

/*let state: RootStateType = {

    profilePage: {
        messageForNewPost: "",
        posts: [
            {id: v1(), message: "My first post", likesCount: 10},
            {id: v1(), message: "How are you", likesCount: 33},
            {id: v1(), message: "My two post", likesCount: 11},
            {id: v1(), message: "My three post", likesCount: 999},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Dimych"},
            {id: v1(), name: "Andrey"},
            {id: v1(), name: "Sveta"},
            {id: v1(), name: "Sasha"},
            {id: v1(), name: "Viktor"},
            {id: v1(), name: "Valera"},
        ],
        textForNewMessage: "",
        messages: [
            {id: v1(), message: "Hi!"},
            {id: v1(), message: "How is your it-kamasutra?"},
            {id: v1(), message: "Yo!"},
            {id: v1(), message: "Yo!"},
            {id: v1(), message: "Yo!"},
        ],
    },
    sidebar: {
        friends: [
            {id: v1(), name: "Dimych", avatarIcon: ""},
            {id: v1(), name: "Andrey", avatarIcon: ""},
            {id: v1(), name: "Sveta", avatarIcon: ""},
        ],
    }
}*/


/*export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: v1(),
        message: postText,
        likesCount: 7,
    }
    state.profilePage.posts.push(newPost);
    // state.profilePage.messageForNewPost = ""
    renderThree(state);
    console.log(newPost)
}*/

/*export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderThree(state);
}*/
///
/*
export const sendMessage = (messageText: string) => {
    const newMessage: MessageType = {
        id: v1(),
        message: messageText,
    }
    state.dialogsPage.messages.push(newMessage);
    renderThree(state);
    console.log(newMessage)
}

export const newMessageText = (messageText: string) => {
    state.dialogsPage.textForNewMessage = messageText
    renderThree(state);
}*/
export default store;

