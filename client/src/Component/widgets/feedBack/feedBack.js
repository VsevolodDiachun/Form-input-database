import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import * as yup from 'yup';

import createUser from '../../../api/users.js';
import "./feedBack.css";

const FeedBack = () => {
    const [feedbackData, setFeedbackData] = useState({
        name: '',
        email: '',
        message: '',
    });


    let schema = yup.object().shape({
        name: yup.string('Name is invalid').required('Name is required').min(3, 'Name is too short'),
        email: yup.string('Email is invalid').email('Email is invalid').required('Email is required'),
        message: yup.string('Message is invalid').required('Message is required').min(3, 'Message is too short')
    });

    function submitHandler(e){
        e.preventDefault();
        schema.validate(feedbackData).then((result)=>{
            createUser(feedbackData).then(()=>{
                toast.success('Form is submitted');
                setFeedbackData({
                    name:'',
                    email: '',
                    message: ''
                })
            })
        }).catch((err)=>{
            toast.error(err?.errors[0])
        })
    }

    return (
        <>
            <form onSubmit={submitHandler} className="form">
                <ToastContainer />
                <p className="title">Reach out to us!</p>
                <input type="text"
                       value={feedbackData.name}
                       className="size-name-email margin-8px-down font-text"
                       placeholder="Your name*"
                       onChange={(e) => setFeedbackData({...feedbackData, name:e.target.value})}
                />

                <input type="text"
                       value={feedbackData.email}
                       className="size-name-email margin-8px-down font-text"
                       placeholder="Your e-mail*"
                       onChange={(e) => setFeedbackData({...feedbackData, email:e.target.value})}
                />
                <textarea type="text"
                          value={feedbackData.message}
                          className="size-message margin-message-23px-down font-text"
                          placeholder="Your message*"
                          onChange={(e) => setFeedbackData({...feedbackData, message:e.target.value})}
                />

                {/*<button onClick={(e) => buttonSend(e)}*/}
                <button type="submit" className="btn-send">Send message</button>
            </form>
        </>
    )
}

export default FeedBack;