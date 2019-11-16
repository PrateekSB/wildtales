import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, Column } from 'typeorm';
import { Tales } from '../entities/tales.entity';
import { Logger } from '@nestjs/common';

export default class CreateTales implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const talesCount = await connection
      .getRepository(Tales)
      .createQueryBuilder('tales')
      .getCount();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Tales)
      .values(this.importTales())
      .execute();
    return;
  }

  public importTales() {
    try {
      Logger.log('Importing tales data');
      return require('../import/tales-import.json');
    } catch (e) {
      Logger.error('Failed to import tales seed data: ');
      Logger.error(e.toString());
    }
  }
}
