import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {ActionsTypes, store, StoreType} from "./redux/store";
import { RootStateType } from "./redux/store-redux";

export type AppPropsType = {
    state: RootStateType

    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    // newMessageTextCallback: (messageText: string) => void
    // sendMessageCallback: (messageText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}
 /*                                                             addPostCallback={props.addPostCallback.bind(store)}
                                                              changeNewTextCallback={props.changeNewTextCallback.bind(store)}*//>}/>

                <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.dialogsPage}
                                                              dispatch={props.dispatch}
/*                                                              sendMessageCallback={props.sendMessageCallback}
                                                              newMessageTextCallback={props.newMessageTextCallback}*//>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;