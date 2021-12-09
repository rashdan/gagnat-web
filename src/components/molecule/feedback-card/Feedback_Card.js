import React from 'react'
import Person_1 from '../../../assets/imgs/person_1.jpg'

const Feedback_Card = () => {
    return (
        <div className="feedback-card-1">
            <div className="img-circle">
                <img src={Person_1} alt="" />
            </div>
            <div className="card-main-content">
            <h4>Lena HazeliusRädda Barnen</h4>
            <p>“Vi tyckte ju detta var ett väldigt spännande samarbete utifrån att vi får in ett tydligare miljötänk i vårt Sverige Program som har haft en del utmaningar i att jobba med miljöperspektivet.”</p>
            </div>
        </div>
    )
}

export default Feedback_Card
