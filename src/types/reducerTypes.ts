// ----------------------
// === clicks reducer ===
// ----------------------
export type ClickCounterActions =
    | { type: 'INCREMENT' }

export interface ICounterState {
    clickCounter: number;
}
// ----------------------
// === team reducer ===
// ----------------------
export type ClickTeamActions =
    | { type: 'SETTEAMNAME', payload: string }
    | { type: 'SETYOURCLICKS', payload: number }
    | { type: 'SETTEAMCLICKS', payload: number }

export interface ITeamState {
    teamName: string;
    teamHash: string;
    yourClickCount: number;
    teamClickCount: number;
}

// ----------------------
// === updateLeaderboard reducer ===
// ----------------------
export type UpdateLeaderboardActions =
    | { type: 'UPDATE' }

export interface IUpdateState {
    update: boolean;
}
