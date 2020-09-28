import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    updateLeaderboard,
    setYourClicksCount,
    setTeamClicksCount
} from '../../actions'

const axios = require('axios');

export function Clicks() {
    const [ teamNameInput, setTeamNameInput ] = useState<string>('');

    return (
        <div className="header">
            <div className="team">
                <div className="inputLabelDiv">Enter your team name:</div>
                <div className="inputDiv">
                    <input
                        placeholder="Your mom"
                        value={teamNameInput}
                        onChange={e => setTeamNameInput(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="startClickingButton">
                <button
                    onClick={() => window.location.href = `/${teamNameInput}`}
                >Start clicking</button>
            </div>
        </div>
    );
}

export function MainClickingButton() {
    const dispatch = useDispatch();

    const teamHash = useSelector<any>(state => state.teamReducer.teamHash);
    const teamName = useSelector<any>(state => state.teamReducer.teamName);

    const click = async () => {
        try {
            const res = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_DB_URI}/api/v1/klik`,
                header: {
                    type: 'application/json'
                },
                data: {
                    team: teamName,
                    session: teamHash
                }
            });

            // get total count for team clicks
            dispatch(setYourClicksCount(res.data.your_clicks));
            dispatch(setTeamClicksCount(res.data.team_clicks));

            // update leadership board
            dispatch(updateLeaderboard());
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mainClikignButton">
            <button onClick={click}>Click Meee!</button>
        </div>
    );
}
