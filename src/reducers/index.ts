import { combineReducers } from 'redux'

// import all reducers
import teamReducer from './team';
import updateLeaderboardReducer from './updateLeaderboard'

const combinedReducer = combineReducers({
    teamReducer,
    updateReducer: updateLeaderboardReducer
})

export default combinedReducer;