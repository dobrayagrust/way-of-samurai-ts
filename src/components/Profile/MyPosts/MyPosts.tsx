import React from "react";
import "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsType>;
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(post => <Post message={post.message}
                                      likesCount={post.likesCount}/>);

    return (
        <div>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
