import React from 'react'

const Circle = (props) => {
    return (
        <div className="empty-circle">
            <div className="inner-circle">
                {props.title}
            </div>
        </div>
    )
}

export default Circle
