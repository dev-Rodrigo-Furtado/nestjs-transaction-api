import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
    constructor(
        @Inject('TRANSACTIONS_REPOSITORY')
        private transactionsRepository: typeof Transaction
    ) {}

    create(createTransactionDto: CreateTransactionDto) {
        return this.transactionsRepository.create(createTransactionDto);
    }

    findAll() {
        return this.transactionsRepository.findAll();
    }
}
