import { ClickTeamActions, ITeamState } from '../types/reducerTypes'
import { randomString } from '../utils/randomStringGenerator'

const initTeam: ITeamState = {
    teamName: '',
    teamHash: randomString(8),
    yourClickCount: 0,
    teamClickCount: 0
}

const teamReducer = (state: ITeamState = initTeam, action: ClickTeamActions) => {
    switch (action.type) {
        case 'SETTEAMNAME':
            return {
                ...state,
                teamName: action.payload
            };
        case 'SETYOURCLICKS':
            return {
                ...state,
                yourClickCount: action.payload
            };
        case 'SETTEAMCLICKS':
            return {
                ...state,
                teamClickCount: action.payload
            };
        default:
            return state;
    }
}

export default teamReducer;