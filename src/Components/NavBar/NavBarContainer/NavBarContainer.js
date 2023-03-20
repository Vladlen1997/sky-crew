import React from 'react';
import StoreContext from "../../../StoreContext";
import NavBar from "../NavBar";


const NavBarContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().navBarPage.nameLink;
                    return <NavBar nameLink={state}/>
                }
            }
        </StoreContext.Consumer>
    )
}


export default NavBarContainer;