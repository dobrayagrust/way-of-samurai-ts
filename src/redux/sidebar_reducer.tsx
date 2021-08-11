import {SidebarType} from "./store";
import {v1} from "uuid";

const initialState: SidebarType = {
    friends: [
        {id: v1(), name: "Dimych", avatarIcon: ""},
        {id: v1(), name: "Andrey", avatarIcon: ""},
        {id: v1(), name: "Sveta", avatarIcon: ""},
    ],
}

const sidebarReducer = () => {

}
export default sidebarReducer