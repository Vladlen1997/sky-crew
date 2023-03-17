import React from 'react';
import classes from './NavBar.module.css';
import NavBarLink from "./NavBarLink/NavBarLink";


const NavBar = (props) => {
    let nameLinkEl = props.nameLink.nameLink.map(link => <NavBarLink id={link.id} link={link.link}/>);
    return (
        <div className={classes.nav}>
            {nameLinkEl}
        </div>
    )
}


export default NavBar;