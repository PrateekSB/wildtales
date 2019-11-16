import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Tale} from "./tale";
import {CreateTaleDto} from "./tale.dto";

@Injectable()
export class TalesService {
    constructor(@InjectModel('Tale') private readonly taleModel: Model<Tale>) {
    }

    async create(createTaleDto: CreateTaleDto): Promise<Tale> {
        const createdCat = new this.taleModel(createTaleDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Tale[]> {
        return await this.taleModel.find().exec();
    }
}
