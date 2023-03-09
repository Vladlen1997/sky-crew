import React from 'react';
import classes from './Header.module.css';
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = () => {
    let headerLink = [
        {id: 1, object: "Shutdown mode"},
        {id: 2, object: "do not disturb mode"},
        {id: 3, object: "accessibility mode"}
    ];
    let headerLinkEl = headerLink.map(mode => <HeaderLink id={mode.id} object={mode.object}/>);
    return (
        <div className={classes.header}>
            {headerLinkEl}
        </div>
    )
}

export default Header;