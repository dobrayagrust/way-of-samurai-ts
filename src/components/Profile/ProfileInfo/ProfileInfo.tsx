import React from "react";
import classes from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img alt={""}
                src={"https://images.unsplash.com/photo-1485211177140-aa3b17a0c7b6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8aVVJc25WdGpCMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}/>
            <div>ava +description</div>
        </div>
    );
}
export default ProfileInfo;
