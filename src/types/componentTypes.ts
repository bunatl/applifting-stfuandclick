//  -------------------
// ===== Header ======
//  -------------------
export interface IPathParams {
    slug: string;
}

//  -------------------
// ====== Leaderboard ========
//  -------------------
export interface ILeaderboardEntry {
    order: number;
    team: string;
    clicks: number;
}