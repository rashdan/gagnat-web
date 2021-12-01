import React from 'react'

const Login = () => {
    return (
        <div className="main-login-1">
            <h2>Låt oss börja!</h2>
            <form className="form-1">
                <input
                    type="email"
                    placeholder="Skriv in din e-postadress"
                    className="input-field-1"
                ></input>
                <input
                    type="password"
                    placeholder="Ange ditt lösenord"
                    className="input-field-1"
                ></input>
                <input type="checkbox" className="check-box-1"></input>
                <span className="span-1">Are you agree with the terms and Conditions</span> <br />
                <button
                type="submit"
                className="sub-btn-1"
                >Submit</button>
            </form>
        </div>
    )
}

export default Login
