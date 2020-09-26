import { combineReducers } from 'redux'

// import all reducers
import clicksReducer from './clicks';
import teamReducer from './team';
import updateLeaderboardReducer from './updateLeadership'

const combinedReducer = combineReducers({
    clicksReducer,
    teamReducer,
    updateReducer: updateLeaderboardReducer
})

export default combinedReducer;