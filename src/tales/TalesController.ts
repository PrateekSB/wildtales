import {Controller, Get, Req} from "@nestjs/common";

@Controller('tales')
export class TalesController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all tales of wild animals';
    }
}

