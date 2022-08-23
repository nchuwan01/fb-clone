import React, {useState} from 'react';
import './MessageSender.css';
import {Avatar} from "@mui/material";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@mui/icons-material";
import {useStateValue} from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";


function MessageSender()
{
    const[input,setInput] = useState('');
    const[imageUrl, setImageUrl] = useState("");
    const [{user},dispatch] = useStateValue();

    function handleSubmit(e) {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
        //some clever database
        setInput("")
        setImageUrl("")
    }

    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>

                    <input value={input}
                           className="messageSender_input"
                           onChange={(e)=> setInput(e.target.value)}
                           type="text"
                           placeholder={ `What's on your mind, ${user.displayName}?`}
                               />
                    <input
                        value={imageUrl}
                        onChange={(e)=> setImageUrl(e.target.value)}
                        type="text" placeholder="image URL (optional)"/>
                    <button onClick={handleSubmit} type="submit"> Hidden Button</button>
                </form>

            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option" >
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>

                </div>


            </div>



        </div>
    )
}
export default MessageSender;