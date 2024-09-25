//create nest controller event class with an endpoint /event/team/:teamId/history endpoint that calls event service getTeamHistory method

import { Controller, Get, Param } from "@nestjs/common";
import { EventService } from "./event.service";
import { TeamHistory } from "./model/TeamHistory";

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get('team/:teamId/history')
    async getTeamHistory(@Param('teamId') teamId: number): Promise<TeamHistory> {
        return this.eventService.getTeamHistory(teamId);
    }
}