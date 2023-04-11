import './App.css';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer/UsersContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer/NavBarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = () => {

    return (
        <div className="app">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className='profile'>
                <Routes>
                    <Route path={'/Profile/*'}
                           element={<ProfileContainer/>}/>
                    <Route path='/Messages' element={<DialogsContainer/>}/>
                    <Route path='/Users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
