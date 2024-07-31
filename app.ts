import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';


const thiagoAccount: PeopleAccount = new PeopleAccount(1,'Thiago Mota',10)
console.log(thiagoAccount);
thiagoAccount.deposit(15362.36)

console.log(thiagoAccount);
thiagoAccount.withdraw(230)
console.log(thiagoAccount.getBalance());

thiagoAccount.iHaveALoan()
thiagoAccount.getLoan(2000)
thiagoAccount.getBalance()

const thiagoLtda: CompanyAccount = new CompanyAccount('Thiago Ltda',1223,thiagoAccount);
console.log(thiagoAccount);
thiagoLtda.deposit(2332560.96)
console.log(thiagoLtda);

thiagoLtda.depositToPeopleAccount(4630.42)
console.log(thiagoLtda);

console.log(thiagoAccount.getBalance());
console.log(thiagoAccount);



