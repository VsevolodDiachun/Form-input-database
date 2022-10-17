import {useState, useEffect} from "react";

import createUser from '../../../api/users.js';
import "./feedBack.css";
import {toast} from "react-toastify";

const FeedBack = () => {

    const [onName, setName] = useState();
    const [onEmail, setEmail] = useState();
    const [onMessage, setMessage] = useState();


    const buttonSend = (e) => {
        // e.preventDefault();
        if (checkEmailShort(onMessage).length === 0) {
            createUser(onName, onEmail, onMessage)
                .then(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                });
        } else {
            toast.error(checkEmailShort(onMessage));
        }
        //createUser(onName, onEmail, onMessage);
    }


    const checkEmailShort = (str) => {
        let message = '';
        if (str.split('@').length === 2) {
            if (str.split('@')[1].split('.').length < 2) {
                message = 'Нема крапочки.';
            } else if (str.split('@')[1].split('.')[0].length === 0) {
                message = 'Довжина між псом і крапкою менша ніж 1 символ.';
            } else {
                message = '';
            }
        } else {
            message = 'Нема пса, або забагато псів.';
        }
        return message;
    }


    return (
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
                        className="btn-send">Send message
                </button>
            </form>
        </>
    )
}

export default FeedBack;