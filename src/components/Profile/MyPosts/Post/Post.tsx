import React from "react";
import "./Post.module.css";
import classes from "./Post.module.css";

type postPropsType = {
    message: string;
    likesCount: number;
}

const Post = (props: postPropsType) => {
    return (
        <div className={classes.item}>
            <img alt={""}
                src={"data:image/png;base64,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"}/>
            {props.message}
            <div>Like {props.likesCount}</div>
        </div>
    );
}
export default Post;
