import React from 'react';

function Clicks() {
    return (
        <div className="header">
            <div className="team">
                <div className="inputLabelDiv">Enter your team name:</div>
                <div className="inputDiv"><input placeholder="Your mom"></input></div>
            </div>
            <div className="startClickingButton">
                <button>Start clicking</button>
            </div>
        </div>
    );
}

export default Clicks;
