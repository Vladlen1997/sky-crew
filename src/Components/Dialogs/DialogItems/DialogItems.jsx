import React from "react";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    return (
        <div>
          <NavLink to={'/' + props.dialog}>{props.dialog}</NavLink>
        </div>
    )
}

export default DialogItems;