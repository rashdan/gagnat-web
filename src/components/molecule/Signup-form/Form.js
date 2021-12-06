import React from 'react'
import './Form.css';

const Form = () => {
    return (
        <form className="form">
            <input type="text" className="input-1" placeholder="&nbsp;&nbsp;&nbsp;Namn*"></input>
            <input type="text" className="input-1" placeholder="&nbsp;&nbsp;&nbsp;Telefon*"></input>
            <input type="text" className="input-1" placeholder="&nbsp;&nbsp;&nbsp;Email*"></input>
            <textarea className="input-2" placeholder="&nbsp;&nbsp;&nbsp;Meddelande till Gagnat"></textarea>
        </form>
    )
}

export default Form
