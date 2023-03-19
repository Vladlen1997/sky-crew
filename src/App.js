import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer/DialogsContainer";


const App = (props) => {

    return (
        <div className="app">
            <Header headerPage={props.state.headerPage}/>
            <NavBar nameLink={props.state.navBarPage}/>
            <div className='profile'>
                <Routes>
                    <Route path='/Profile'
                           element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
                    <Route path='/Messages' element={<DialogsContainer store = {props.store} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
