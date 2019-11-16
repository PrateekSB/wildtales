import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TalesModule} from "./tales/tales.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://vienna_1:U65zzmUeutDP2zF@ds053978.mlab.com:53978/heroku_40m67v44'),
        TalesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
