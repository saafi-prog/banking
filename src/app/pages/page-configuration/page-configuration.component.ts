import { Component, OnInit } from '@angular/core';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-page-configuration',
  templateUrl: './page-configuration.component.html',
  styleUrls: ['./page-configuration.component.css'],
})
export class PageConfigurationComponent implements OnInit {
  public accountIban!: string;
  constructor(private monService: BankingService) {}
  ngOnInit(): void {
    this.monService.getAccountByIban(this.accountIban).subscribe((resp) => {
      console.log(resp);
    });
  }
}
