import {v1} from "uuid"

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

export type StoreType = {
    _state: RootStateType
    // newPostText: (newText: string) => void
    // addPost: (postText: string) => void
    _renderThree: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    // newMessageText: (messageText: string) => void
    // sendMessage: (messageText: string) => void
    dispatch: (action: ActionsTypes) => void

}
export type ActionsTypes = AddPostActionType | NewTextPostType | SendMessageType | NewMessageType

type AddPostActionType = {
    type: 'ADD-POST'
}

type NewTextPostType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}

type SendMessageType = {
    type: 'SEND-MESSAGE'
}

type NewMessageType = {
    type: 'NEW-MESSAGE-TYPE'
    messageText: string
}

/*const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'CHANGE-NEW-TEXT'

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}*/

/*
export const updateChangeNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT , newText: text
    }
}
*/

export const store: StoreType = {
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
    /*addPost(postText: string) {
        debugger
        const newPost: PostsType = {
            id: v1(),
            message: postText,
            likesCount: 7,
        }
        this._state.profilePage.posts.push(newPost);
        // state.profilePage.messageForNewPost = ""
        this._renderThree(this._state);
        // console.log(newPost)
    },
    newPostText(postText: string) {
        this._state.profilePage.messageForNewPost = postText
        this._renderThree(this._state);
    },
    sendMessage(messageText: string) {
        const newMessage: MessageType = {
            id: v1(),
            message: messageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._renderThree(this._state)
        // console.log(newMessage)
    },
    newMessageText(messageText: string) {
        this._state.dialogsPage.textForNewMessage = messageText
        this._renderThree(this._state)
    },*/
    subscribe(callback) {
        this._renderThree = callback
    },
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: v1(),
                message: this._state.profilePage.messageForNewPost,
                likesCount: 7,
            }
            if (this._state.profilePage.messageForNewPost.length !== 0) {
                this._state.profilePage.posts.push(newPost);
                this._renderThree(this._state)
            }
        } else if
        (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._renderThree(this._state)
        } else if
        (action.type === 'SEND-MESSAGE') {
            const newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.textForNewMessage,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._renderThree(this._state)
        } else if
        (action.type === 'NEW-MESSAGE-TYPE') {
            this._state.dialogsPage.textForNewMessage = action.messageText
            this._renderThree(this._state)
        }
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
// export default store;

