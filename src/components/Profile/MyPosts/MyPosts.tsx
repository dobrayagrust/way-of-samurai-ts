import React, {KeyboardEvent} from "react";
import "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(post => <Post
                id={post.id}
                message={post.message}
                likesCount={post.likesCount}
            />
        );


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

        if(newPostElement.current) {
            const text = newPostElement.current.value
            props.addPostCallback(text)
            newPostElement.current.value = ""
        }
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
