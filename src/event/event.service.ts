import { Injectable, Logger } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import {firstValueFrom} from "rxjs";
import {TeamHistory} from "./model/TeamHistory";
@Injectable()
export class EventService {
    private readonly logger = new Logger(EventService.name);
    private readonly API_ENTRY_URL = 'https://fantasy.premierleague.com/api/entry';

    constructor(private readonly httpService: HttpService) {}

    public async getTeamHistory(teamId: number): Promise<TeamHistory> {
        this.logger.log(`Getting Team History for teamId: ${teamId}`);
        const resp =  await firstValueFrom(this.httpService.get(`${this.API_ENTRY_URL}/${teamId}/history/`));
        return resp.data;
    }
}