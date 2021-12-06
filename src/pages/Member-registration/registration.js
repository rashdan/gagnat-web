import React from "react";
import './registration.css'
import Registration from '../../components/organism/registration/Registration';

const signup = () => {
    return (
        <div className="main">
            <Registration />
            <div className="sub-container-2">
                <div className="text-4"> Bli vår partner idag!</div>
                <div className="text-5"> Låt oss hjälpa er att göra en</div>
                <div className="text-5"> positiv påverkan i kretsloppet.</div>
            </div>

        </div>
    )
}

export default signup;