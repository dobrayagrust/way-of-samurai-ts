import React from "react";
import "./Profile.module.css"
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type profilePropsType = {
    profilePage: ProfilePageType;
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}



const Profile = (props: profilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
/*                     addPostCallback={props.addPostCallback}
                     changeNewTextCallback={props.changeNewTextCallback}*/
            />
        </div>
    );
}

export default Profile;
