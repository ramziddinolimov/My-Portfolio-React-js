import React from 'react';

function ProgressBar({title, width, text}) {
    return (
        <div>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
