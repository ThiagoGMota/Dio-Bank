import { DioAccount } from './DioAccount';
import { PeopleAccount } from './PeopleAccount';

export class CompanyAccount extends DioAccount {
    private peopleAccount: PeopleAccount;

    constructor(name: string, accountNumber: number, peopleAccount: PeopleAccount) {
        super(name, accountNumber);
        this.peopleAccount = peopleAccount; // Referência à conta de pessoa
    }

    deposit = (valor: number): number => {
        // Verifica se a conta da empresa está ativa antes de depositar
        if (this.validadeStatus()) {
            // Realiza o depósito na própria conta da empresa
            this.balance += valor;
             // Adiciona o valor ao saldo da conta da empresa
            console.log(`${this.name} deposited $${valor} dollars into its own account.`);
            return this.getBalance(); // Retorna o saldo da conta da empresa
        } else {
            console.log('${this.name} is inactive, please contact the center');
            return this.getBalance(); // Retorna o saldo da conta da empresa
        }
    }

    depositToPeopleAccount = (valor: number): number => {
        // Verifica se a conta da empresa está ativa antes de depositar na conta de pessoa
        if (this.validadeStatus()) {
            // Realiza o depósito na conta de pessoa
            this.peopleAccount.deposit(valor+10);
            console.log(`${this.name} deposited $${valor} dollars into ${this.peopleAccount.getName()}'s account.`);
            this.balance -= valor
            return this.getBalance(); // Retorna o saldo da conta da empresa
        } else {
            console.log(`${this.name} is inactive, please contact the center`);
            return this.getBalance(); // Retorna o saldo da conta da empresa
        }
    }
}
