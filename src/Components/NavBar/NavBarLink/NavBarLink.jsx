import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './NavBarLink.module.css';


const NavBarLink = (props) => {
    let path = '/' + props.link;
    return <div className={classes.nav}>
        <NavLink to={path}>{props.link}</NavLink>
    </div>
}


export default NavBarLink;