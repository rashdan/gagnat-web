import React from 'react'
import Form from '../../molecule/Signup-form/Form';
import './Registration.css';
import Button from '../../atom/button/Button';

function Registration() {
    return (
        <div className="sub-container-1">
            <div className="content">
                <div className="text-1">Bli en rescuer idag</div>
                <div className="text-2">Anmäl er till Gagnats platform!</div>
                <Form />
                <div className="text-3">Fält markerade med * är obligatoriskt</div>
                <Button />
            </div>
        </div>
    )
}

export default Registration
