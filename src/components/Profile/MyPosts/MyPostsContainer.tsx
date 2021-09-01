import React, {ChangeEvent, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType, ProfilePageType,} from "../../../redux/store";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profilepage_reducer";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    posts: Array<PostsType>
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(post => <Post
                id={post.id}
                message={post.message}
                likesCount={post.likesCount}
            />
        );

    const addPost = () => {
        // if(newPostElement.current) {
        //     const text = newPostElement.current.value
        //     props.addPostCallback(text)
        //     newPostElement.current.value = ""
        // }
        // props.dispatch({type: 'ADD-POST'})
        props.dispatch(addPostActionCreator())
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.currentTarget.value
        // props.dispatch({type: 'CHANGE-NEW-POST-TEXT', newText})
        props.dispatch(changeNewPostTextActionCreator(newText))
    }

    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter")
            addPost()
    }

    return (
        <div>
            <h3> My posts</h3>
            <div>
                <div>
                     <textarea
                         placeholder={"Add post..."}
                         onKeyPress={onKeyPressEnter}
                         onChange={changeHandler}
                         value={props.profilePage.messageForNewPost}
                     />
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
})
