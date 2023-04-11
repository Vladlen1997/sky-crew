import React from "react";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    return (
        <div>
          <NavLink to={'/Messages/'  + props.id}>{props.dialog}</NavLink>

        </div>
    )
}

export default DialogItems;