import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { LeagueService } from "./league.service";
import { LeagueController } from "./league.controller";

@Module({
    imports: [HttpModule],
    controllers: [LeagueController],
    providers: [LeagueService]
})
export class LeagueModule {}