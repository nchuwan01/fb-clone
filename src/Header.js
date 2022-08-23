import React from 'react';
import "./Header.css";
import { FaSearch, FaHome,FaFlag, FaUser } from 'react-icons/fa';
import {MdOutlineSubscriptions,MdOutlineStorefront,MdSupervisedUserCircle, MdAdd,MdForum,MdNotificationsActive,MdOutlineExpandMore} from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import pic from "./Nar.jpg"
import {useStateValue} from "./StateProvider";

function Header(){

    const [{user},dispatch] = useStateValue();
    return (
        <div className={"header"}>

            <div className={"header_left"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt={"facebook Logo"}/>
                <div className={"header_input"}>
                    <FaSearch />
                    <input placeholder="Search Facebook" type={"text"}/>
                </div>
            </div>

            <div className={"header_center"}>
                <div className={"header_option header_option--active"}>
                    <FaHome fontSize="large" />
                </div>

                <div className={"header_option"}>
                    <FaFlag fontSize="large"/>
                </div>
                <div className={"header_option"}>
                    <MdOutlineSubscriptions fontSize="large"/>
                </div>
                <div className={"header_option"}>
                    <MdOutlineStorefront
                        fontSize="large"  />
                </div>
                <div className={"header_option"}>
                    <MdSupervisedUserCircle fontSize="large"  />
                </div>
            </div>
            <div className={"header_right"}>

                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <MdAdd />
                </IconButton>
                <IconButton>
                    <MdForum />
                </IconButton>
                <IconButton>
                    <MdNotificationsActive />
                </IconButton>
                <IconButton>
                    <MdOutlineExpandMore />
                </IconButton>
            </div>

        </div>
    )
}

export default Header;