import React from "react";
import "./Profile.module.css"
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type profilePropsType = {
    profilePage: ProfilePageType;
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPostCallback={props.addPostCallback}
                     changeNewTextCallback={props.changeNewTextCallback}
            />
        </div>
    );
}

export default Profile;
