import {TaleSchema} from "../database/tale.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {TalesService} from "./tales.service";
import {TalesController} from "./tales.controller";
import {Module} from "@nestjs/common";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Tale', schema: TaleSchema}])],
    controllers: [TalesController],
    providers: [TalesService],
})
export class TalesModule {
}
