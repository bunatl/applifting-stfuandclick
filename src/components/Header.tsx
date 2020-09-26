import React from 'react';

export function Quote() {
    return (
        <div className="quote">
            <div className="text">"It's really simple,  you just need to click as fast as you can"</div>
            <div className="author">- anonymous</div>
        </div>
    );
}

export function SharingInfo() {
    return (
        <div className="share">
            <div>Clicking for team <span>Lukas</span></div>
            <div>Too lazy to click? Let your pals click for you: <div>prefix/Lukas</div></div>
        </div>

    );
}

