import { TransactionsModule } from './transactions/transactions.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'sqlite',
            host: join(__dirname, 'database.sqlite'),
            autoLoadModels: true,
            synchronize: true
        }),
        TransactionsModule
    ]
})
export class AppModule {}
