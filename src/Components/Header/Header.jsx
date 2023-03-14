import React from 'react';
import classes from './Header.module.css';
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = (props) => {

    let headerLinkEl = props.headerPage.map(mode => <HeaderLink id={mode.id} object={mode.object}/>);
    return (
        <div className={classes.header}>
            {headerLinkEl}
        </div>
    )
}

export default Header;