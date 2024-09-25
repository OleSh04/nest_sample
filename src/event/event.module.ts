import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { HttpModule } from "@nestjs/axios";
import {EventController} from "./event.controller";

@Module({
    imports: [HttpModule],
    controllers: [EventController],
    providers: [EventService]
})
export class EventModule {}