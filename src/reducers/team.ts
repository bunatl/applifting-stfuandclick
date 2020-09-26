type ClickTeamActions =
    | { type: 'SETYOURCLICKS', payload: number }
    | { type: 'SETTEAMCLICKS', payload: number }

interface ITeamState {
    yourClickCount: number;
    teamClickCount: number;
}

const initTeam: ITeamState = {
    yourClickCount: 0,
    teamClickCount: 0
}

const teamReducer = (state: ITeamState = initTeam, action: ClickTeamActions) => {
    switch (action.type) {
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