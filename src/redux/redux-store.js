import {combineReducers, legacy_createStore as createStore} from "redux";
import headerReducer from "./header-reducer";
import navBarReducer from "./navBar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    headerPage: headerReducer,
    navBarPage: navBarReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;