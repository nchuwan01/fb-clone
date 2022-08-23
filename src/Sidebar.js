import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import pic from "./Nar.jpg"

import { FaSearch, FaHome,FaFlag, FaUser } from 'react-icons/fa';
import {MdOutlineSubscriptions,MdOutlineStorefront,MdSupervisedUserCircle, MdAdd,MdForum,MdNotificationsActive,MdOutlineExpandMore} from "react-icons/md";
import {Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, VideoLibrary} from "@mui/icons-material";
import {useStateValue} from "./StateProvider";
function Sidebar()
{
    const [{user},dispatch] = useStateValue();

    return(
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends"/>
            <SidebarRow Icon={Chat} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>

    )

}
export default Sidebar;