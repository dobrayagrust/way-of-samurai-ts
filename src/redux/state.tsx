// import React from "react";
export type MessageType = {
    id: number;
    message: string;
}
export type DialogsType = {
    id: number;
    name: string;
}
export type PostsType = {
    id: number;
    message: string;
    likesCount: number;
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: "My first post", likesCount: 10},
            {id: 2, message: "How are you", likesCount: 33},
            {id: 3, message: "My two post", likesCount: 11},
            {id: 4, message: "My three post", likesCount: 999},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ],

        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo!"},
            {id: 4, message: "Yo!"},
            {id: 5, message: "Yo!"},
        ],
    },
    sidebar: {}
}

export default state;

