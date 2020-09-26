import React from 'react';

function Ribbon() {
    return (
        // taken from: https://css-tricks.com/snippets/css/ribbon/
        // all credits to: Chris Coyier
        <div className="non-semantic-protector">
            <div className="ribbon">
                <strong className="ribbon-content">Top 10 clickers</strong>
            </div>
        </div>
    );
}

export default Ribbon;
