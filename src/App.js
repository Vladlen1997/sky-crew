import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = (props) => {
    return <BrowserRouter>
        <div className="app">
            <Header headerPage={props.headerPage}/>
            <NavBar nameLink={props.nameLink}/>
            <div className='profile'>
                <Routes>
                    <Route path='/Profile' element={<Profile likesCount={props.likesCount}/>}/>
                    <Route path='/Messages' element={<Dialogs dialogsPage={props.dialogsPage} />}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
}

export default App;
