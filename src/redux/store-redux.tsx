import {combineReducers, createStore} from "redux";
import profileReducer from "./profilepage_reducer";
import dialogsReducer from "./dialogspage_reducer";
import sidebarReducer from "./sidebar_reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    // sidebar: sidebarReducer,
})

const store = createStore(reducers)


export type RootStateType = ReturnType<typeof store.getState>

export default store