import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";

const App = () => {
    return <BrowserRouter>
        <div className="app">
            <Header/>
            <NavBar/>
            <div className='profile'>
                <Routes>
                   <Route path='/Profile' element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
}

export default App;
