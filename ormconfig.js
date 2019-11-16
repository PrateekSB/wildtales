module.exports = {
  type: 'postgres',
  host: 'ec2-54-228-207-163.eu-west-1.compute.amazonaws.com',
  port: 5432,
  username: 'omytmglespqcdl',
  password: '2ea54a1fd22d19c25e7ee0c39b6e2c44994f4cba02b3e1418a56595882bfc0ea',
  database: 'daprhf7q9abmr6',
  ssl: true,
  entities: [
    'dist/database/entities/**/*.entity{.ts,.js}',
    'src/database/entities/entity/**/*.ts',
  ],
  synchronize: true,
  seeds: ['src/database/seeds/**/*.seed.ts'],
  factories: ['src/database/factories/**/*.factory.ts'],
};
