import {Module} from "@nestjs/core/injector/module";
import {TaleSchema} from "../database/tale.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {TalesService} from "./TalesService";
import {TalesController} from "./TalesController";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Tale', schema: TaleSchema }])],
    controllers: [TalesController],
    providers: [TalesService],
})
export class TalesModule {}
