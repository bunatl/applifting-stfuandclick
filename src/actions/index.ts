import {
    UpdateLeaderboardActions,
    ClickTeamActions
} from '../types/reducerTypes'

export const setTeamName = (x: string): ClickTeamActions => ({ type: 'SETTEAMNAME', payload: x });
export const setYourClicksCount = (x: number): ClickTeamActions => ({ type: 'SETYOURCLICKS', payload: x });
export const setTeamClicksCount = (x: number): ClickTeamActions => ({ type: 'SETTEAMCLICKS', payload: x });

export const updateLeaderboard = (): UpdateLeaderboardActions => ({ type: 'UPDATE' });