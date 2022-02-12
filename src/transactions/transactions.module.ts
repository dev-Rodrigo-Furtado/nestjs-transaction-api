import { transactionProviders } from './transactions.providers';
import { Transaction } from './entities/transaction.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

@Module({
    imports: [SequelizeModule.forFeature([Transaction])],
    controllers: [TransactionsController],
    providers: [TransactionsService, ...transactionProviders]
})
export class TransactionsModule {}
