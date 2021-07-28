import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType} from './redux/state';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

export const renderThree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPostCallback={store.addPost.bind(store)}
                     changeNewTextCallback={store.changeNewText.bind(store)}
                     newMessageTextCallback={store.newMessageText.bind(store)}
                     sendMessageCallback={store.sendMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderThree(store.getState())

store.subscribe(renderThree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
