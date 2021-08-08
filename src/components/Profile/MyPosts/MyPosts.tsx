import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import {
    ActionsTypes,

    PostsType,
} from "../../../redux/state";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
} from "../../../redux/profilepage_reducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(post => <Post
                id={post.id}
                message={post.message}
                likesCount={post.likesCount}
            />
        );

    const newPostElement = React.createRef<HTMLTextAreaElement>();

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
                         ref={newPostElement}
                         placeholder={"Add post..."}
                         onKeyPress={onKeyPressEnter}
                         onChange={changeHandler}
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
}

export default MyPosts;
