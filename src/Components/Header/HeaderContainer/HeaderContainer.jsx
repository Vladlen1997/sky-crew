import React from 'react';
import Header from "../Header";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        headerLink: state.headerPage.headerLink
    }
}


const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;