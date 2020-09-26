import React from 'react';

// imports
import Clicks from './content/Clicks'
import TotalClicks from './content/TotalClicks'
import Leaderboard from './content/Leaderboard'
import Motivation from './content/Motivation'

function Content() {
    return (
        <main>
            <Clicks />
            <TotalClicks />
            <Leaderboard />
            <Motivation />
        </main>
    );
}

export default Content;
