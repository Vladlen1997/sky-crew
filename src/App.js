import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer/DialogsContainer";


const App = () => {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <div className='profile'>
                <Routes>
                    <Route path='/Profile'
                           element={<Profile />} />
                    <Route path='/Messages' element={<DialogsContainer />}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
