export abstract class DioAccount {
    protected readonly name: string;
    private readonly accountNumber: number;
    protected balance: number = 0;
    private status: boolean = true;
    private maxLoan: number = 60;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    protected validadeStatus = (): boolean => {
        if (this.status) {
            console.log("Account is active");
            return this.status;
        } else {
            throw new Error("Account is inactive");
        }
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (valor: number): number => {
        if (this.validadeStatus()) {
            this.balance += valor;
            console.log(`You deposited $${valor} dollars`);
            return this.balance;
        } else {
            console.log('Account is inactive, please contact the center');
            return this.balance;
        }
    }

    withdraw = (valor: number): number => {
        if (this.validadeStatus()) {
            if (valor > this.balance) {
                console.log('Insufficient funds');
            } else {
                this.balance -= valor;
                console.log(`You withdrew $${valor} dollars`);
            }
            return this.balance;
        } else {
            console.log('Account is inactive, please contact the center');
            return this.balance;
        }
    }

    getBalance = (): number => {
        console.log(`Your balance is $${this.balance} dollars`);
        return this.balance; // Retorna o saldo atual
    }

    iHaveALoan = (): number => {
        if (this.validadeStatus()) {
            const loanOffer = this.balance * (this.maxLoan / 100);
            console.log(`You are eligible to take out a loan of $${loanOffer.toFixed(2)} dollars`);
            return loanOffer;
        } else {
            console.log('Account is inactive, please contact the center');
            return 0;
        }
    }

    getLoan = (valor: number): number => {
        const loanAmount = this.iHaveALoan();
        if (loanAmount > 0) {
            if (valor <= loanAmount) {
                this.balance += valor;
                console.log(`Your loan of $${valor} dollars was successful, now your total amount is $${this.balance} dollars`);
                return this.balance;
            } else {
                console.log('You are not eligible for this loan');
                return this.balance;
            }
        } else {
            console.log('You are not eligible for this loan');
            return this.balance;
        }
    }
}
