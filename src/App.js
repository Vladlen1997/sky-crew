import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {
    return (
        <div className="app">
            <Header headerPage={props.headerPage}/>
            <NavBar nameLink={props.nameLink}/>
            <div className='profile'>
                <Routes>
                    <Route path='/Profile'
                           element={<Profile post={props.post} newPostText = {props.newPostText} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText}/>} />
                    <Route path='/Messages' element={<Dialogs dialogsPage={props.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
