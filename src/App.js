import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer/UsercContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer/NavBarContainer";


const App = () => {

    return (
        <div className="app">
            <HeaderContainer />
            <NavBarContainer />
            <div className='profile'>
                <Routes>
                    <Route path='/Profile'
                           element={<Profile />} />
                    <Route path='/Messages' element={<DialogsContainer />}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
