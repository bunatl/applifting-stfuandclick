import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading';
import Ribbon from './Ribbon'

const axios = require('axios');

interface ILeaderboardEntry {
    order: number;
    team: string;
    clicks: number;
}

function Leaderboard() {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ leaderboard, setLeaderboard ] = useState<ILeaderboardEntry[]>([]);

    const updateLeaderboard = useSelector<any>(state => state.updateReducer.update);
    useEffect(() => {
        const fetchLeaderboard = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${process.env.REACT_APP_DB_URI}/api/v1/leaderboard`);
                // take only first 10 entries
                setLeaderboard(res.data.slice(0, 10));
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        }
        fetchLeaderboard();
    }, [ updateLeaderboard ])

    return (
        <div className="leaderboard">
            <Ribbon />
            {loading
                ? <ReactLoading
                    type={"spinningBubbles"}
                    color={"cornflowerblue"}
                    className="spinner"
                />
                : <table className="leaderboardTable">
                    <thead>
                        <tr style={{ background: "#E8E8E8" }}>
                            <th className="colNumber">#</th>
                            <th className="colTeam">Team</th>
                            <th className="colClicks">Clicks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((leaderboardEntry, i) => (
                            <tr key={i}>
                                <td className="colNumber">{i + 1}</td>
                                <td className="colTeam">{leaderboardEntry.team}</td>
                                <td className="colClicks">{leaderboardEntry.clicks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Leaderboard;
