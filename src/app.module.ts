import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TalesModule} from "./tales/tales.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://vienna_001:U65zzmUeutDP2zF@zoockathon0-e3coy.gcp.mongodb.net/wildtales?retryWrites=true&w=majority'),
        TalesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
