import {Body, Controller, Get, Post, Req, Request} from "@nestjs/common";
import {TalesService} from "./tales.service";
import {Tale} from "./tale";
import {CreateTaleDto} from "./tale.dto";

@Controller('tales')
export class TalesController {
    constructor(private readonly talesService: TalesService) {
    }

    @Get()
    findAll(): Promise<Tale[]> {
        return this.talesService.findAll();
    }

    @Post()
    async create(@Body() createTaleDto: CreateTaleDto) {
        await this.talesService.create(createTaleDto);
    }

}

