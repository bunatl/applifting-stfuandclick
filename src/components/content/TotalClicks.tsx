import React from 'react';

function TotalClicks() {
    return (
        <div className="clicksScore">
            <div>
                <div>Your clicks:</div>
                <div className="clicksCount">605</div>
            </div>
            <div>
                <div>Team clicks:</div>
                <div className="clicksCount">6235</div>
            </div>
        </div>
    );
}

export default TotalClicks;
