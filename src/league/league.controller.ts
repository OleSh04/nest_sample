import { Controller, Get, Param } from "@nestjs/common";
import { LeagueService } from "./league.service";

@Controller('league')
export class LeagueController {
    constructor(private readonly leagueService: LeagueService) {}

    @Get(':leagueId')
    async getLeagueData(@Param('leagueId') leagueId: number) {
        return this.leagueService.getLeagueData(leagueId);
    }
}