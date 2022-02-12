import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'transactions'
})
export class Transaction extends Model<Transaction> {
    @Column
    account_id: number;

    @Column
    amount: number;
}
