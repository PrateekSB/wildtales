import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Tale} from "./Tale";

@Injectable()
export class TalesService {
    constructor(@InjectModel('Tale') private readonly taleModel: Model<Tale>){}

    async findAll(): Promise<Tale[]> {
        return await this.taleModel.find().exec();
    }
}
