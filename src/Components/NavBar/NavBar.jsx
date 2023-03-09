import React from 'react';
import classes from './NavBar.module.css';
import NavBarLink from "./NavBarLink/NavBarLink";


const NavBar = () => {
    let nameLink = [
        {id: 1, link: "Profile"},
        {id: 2, link: "Friends"},
        {id: 3, link: "Messages"},
        {id: 4, link: "News"},
        {id: 5, link: "Settings"}
    ];
    let nameLinkEl = nameLink.map(link => <NavBarLink id={link.id} link={link.link}/>);
    return (
        <div className={classes.nav}>
            {nameLinkEl}
        </div>
    )
}


export default NavBar;