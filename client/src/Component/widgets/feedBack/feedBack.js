import { useState, useEffect } from "react";

import createUser from '../../../api/users.js';
import "./feedBack.css";

// function uploadMessage(event) {
//     console.log('inside uploadMessage');
//     let target = event.target || event.srcElement ||event.currentTarger;
//     let message = target.message[0];
//     let xhr = new XMLHttpRequest();
// }

const FeedBack = () => {

    const [onName, setName] = useState();
    const [onEmail, setEmail] = useState();
    const [onMessage, setMessage] = useState();


    const buttonSend = (e) => {
        e.preventDefault();
        createUser(onName, onEmail, onMessage);
        console.log('test');
        console.log(onName);
        console.log(onEmail);
        console.log(onMessage);
    }

    return(
        <>
            <form className="form">
                <p className="title">Reach out to us!</p>
                <input type="text" 
                className="size-name-email margin-8px-down font-text" 
                placeholder="Your name*"
                onChange={(e) => setName(e.target.value)}
                />
                <input type="email" 
                className="size-name-email margin-8px-down font-text" 
                placeholder="Your e-mail*"
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea type="text" 
                className="size-message margin-message-23px-down font-text" 
                placeholder="Your message*"
                onChange={(e) => setMessage(e.target.value)}
                />

                <button onClick={(e) => buttonSend(e)} 
                className="btn-send">Send message</button>
            </form>
        </>
    )
}

export default FeedBack;