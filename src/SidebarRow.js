import React from "react"
import "./SidebarRow.css"
import { FaUser } from 'react-icons/fa';
import { Avatar } from '@mui/material';

function SidebarRow({src,Icon,title})
{
    return(
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
           <h4 style={{fontSize: "large"}}> {title}</h4>

        </div>
    )


}
export default SidebarRow;