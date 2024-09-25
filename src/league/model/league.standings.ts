export class LeagueStandings {
    public standings: Standings;
    public teams: Team[];

    constructor(standings: Standings, teams: Team[]) {
        this.standings = standings;
        this.teams = teams;
    }
}