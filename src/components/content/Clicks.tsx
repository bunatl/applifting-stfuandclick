import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { pathParameters } from '../Header';

const axios = require('axios');

export function Clicks() {
    const dispatch = useDispatch();
    const [ teamNameInput, setTeamNameInput ] = useState<string>('');

    const startClicking = () => {
        window.location.href = `/${teamNameInput}`;
        dispatch({
            type: 'SETTEAM',
            payload: teamNameInput
        });
    }

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
                    onClick={startClicking}
                >Start clicking</button>
            </div>
        </div>
    );
}

export function MainClickingButton() {
    const dispatch = useDispatch();
    const { slug } = useParams<pathParameters>();

    const click = async () => {
        // increment local count of your clicks
        dispatch({ type: 'INCREMENT' });
        try {
            const res = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_DB_URI}/api/v1/klik`,
                header: {
                    type: 'application/json'
                },
                data: {
                    team: slug,
                    session: ''
                }
            });

            // get total count for team clicks
            dispatch({ type: 'SETTEAMCLICKS', payload: res.data.team_clicks });
            // update leadership board
            dispatch({ type: 'UPDATE' });
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
