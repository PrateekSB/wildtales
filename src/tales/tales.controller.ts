import {Body, Controller, Get, Post, Req, Request} from "@nestjs/common";
import {TalesService} from "./tales.service";
import {CreateTaleDto} from "./tale.dto";
import {Tale} from "./tale.interface";

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

