import {v1} from "uuid";
import {ActionsTypes, MessageType, PostsType, ProfilePageType, RootStateType} from "./store";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type NewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}


export type InitialStateType = {
    messageForNewPost: string
    posts: Array<PostsType>
}

const initialState: InitialStateType = {
    messageForNewPost: "",
    posts: [
        {id: v1(), message: "My first post", likesCount: 10},
        {id: v1(), message: "How are you", likesCount: 33},
        {id: v1(), message: "My two post", likesCount: 11},
        {id: v1(), message: "My three post", likesCount: 999},
    ],
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 7,
            }
            // if (state.messageForNewPost.length !== 0) {
                state.posts.push(newPost);
                // this._renderThree(this._state)
                return state
            // }
        case CHANGE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText
            return state
        default: return state
    }
/*
    if (action.type === ADD_POST) {
        const newPost: PostsType = {
            id: v1(),
            message: state.messageForNewPost,
            likesCount: 7,
        }
        if (state.messageForNewPost.length !== 0) {
            state.posts.push(newPost);
            // this._renderThree(this._state)
        }
    } else if
    (action.type === CHANGE_NEW_POST_TEXT) {
        state.messageForNewPost = action.newText
        // this._renderThree(this._state)
    }*/
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

export const changeNewPostTextActionCreator = (text: string): NewPostTextType => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText: text
    }
}

export default profileReducer