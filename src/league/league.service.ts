// fpl/src/league/league.service.ts
import { Injectable, Logger } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class LeagueService {
    private readonly logger = new Logger(LeagueService.name);
    private readonly API_LEAGUE_URL = 'https://fantasy.premierleague.com/api/leagues-classic';

    constructor(private readonly httpService: HttpService) {}

    public async getLeagueData(leagueId: number): Promise<any> {
        this.logger.log(`Getting League Data for leagueId: ${leagueId}`);
        const resp = await firstValueFrom(this.httpService.get(`${this.API_LEAGUE_URL}/${leagueId}/standings`));
        return resp.data;
    }
}