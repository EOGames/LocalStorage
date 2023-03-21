import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = function ()
{
    return(
        <div className="topbar">
            <NavLink to={'/'} className='nav'> Home</NavLink>
            <NavLink to={'/add'} className='nav'> Add</NavLink>
            <NavLink to={'/database'} className='nav'> Database</NavLink>
        </div>
    );
}
export default Topbar;