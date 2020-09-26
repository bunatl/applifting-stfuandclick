type UpdateLeaderboardActions =
    | { type: 'UPDATE' }

interface IUpdateState {
    update: boolean;
}

const initUpdate: IUpdateState = {
    update: false
}

const updateLeaderboardReducer = (state: IUpdateState = initUpdate, action: UpdateLeaderboardActions) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                update: !state.update
            };
        default:
            return state;
    }
}

export default updateLeaderboardReducer;