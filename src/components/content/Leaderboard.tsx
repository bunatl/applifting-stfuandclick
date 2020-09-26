import React from 'react';

import Ribbon from './Ribbon'

function Leaderboard() {
    const leaderboard = [
        { team: "", totalClick: 0 }
    ];

    return (
        <div className="leaderboard">
            <Ribbon />
            <table className="leaderboardTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="colTeam">Team</th>
                        <th className="colClicks">Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((leaderboardEntry, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td className="colTeam">{leaderboardEntry.team}</td>
                            <td className="colClicks">{leaderboardEntry.totalClick}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
