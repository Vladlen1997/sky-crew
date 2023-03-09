import {NavLink} from "react-router-dom";
import React from "react";

const HeaderLink = (props) => {
    let path = props.id + props.object;
    return <div>
        <NavLink to={path}>{props.object}</NavLink>
    </div>
}

export default HeaderLink;