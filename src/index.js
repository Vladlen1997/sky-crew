import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addNewPost, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dialogsPage={state.dialogsPage} post={state.profilePage.post}
                     nameLink={state.navBarPage.nameLink} headerPage={state.headerPage.headerLink} newPostText={state.profilePage.newPostText} addNewPost={addNewPost}
              updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );

}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
