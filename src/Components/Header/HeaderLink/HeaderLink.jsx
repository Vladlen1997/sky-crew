import {NavLink} from "react-router-dom";
import React from "react";
import classes from './HeaderLink.module.css';

const HeaderLink = (props) => {
    let path = props.id + props.object;
    return <div className={classes.links}>
        <NavLink to={path}>{props.object}</NavLink>
    </div>
}

export default HeaderLink;