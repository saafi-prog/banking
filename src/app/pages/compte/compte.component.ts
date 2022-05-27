import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
})
export class CompteComponent implements OnInit {
  public transactions!: any[];
  public account!: any;

  today: Date = new Date();
  pipe = new DatePipe('en');
  todayWithPipe!: any;

  constructor(private bankingService: BankingService) {}

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
    console.log(this.transactions);
    /*
    const sortedDesc = this.transactions.sort(
      (objA, objB) => objB.date.getTime() - objA.date.getTime()
      
    );
*/
    this.bankingService.getAccounCurrentUser().subscribe((response) => {
      console.log(response);
      this.account = response.account;
      this.transactions = response.transactions;
    });

    const token = localStorage.getItem('token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    /*
    const options = { headers: myHeaders };

    fetch('http://localhost:8080/accounts/current-user', options)
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);
        this.account = response.account;
        this.transactions = response.transactions;
      });
     */
  }
}
