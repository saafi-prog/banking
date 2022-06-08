import { Component, OnInit } from '@angular/core';
import { UserProfil } from 'src/app/models/user-profil';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css'],
})
export class PageProfilComponent implements OnInit {
  public userprofil!: UserProfil;
  public account!: any;

  // public users!: any;

  constructor(private bankingService: BankingService) {}

  ngOnInit(): void {
    this.bankingService.getCurrentUserProfile().subscribe((resp: any) => {
      console.log(resp);
      this.userprofil = resp;
      console.log(this.userprofil);
      this.bankingService.getAccounCurrentUser().subscribe((resp: any) => {
        this.account = resp.account;
      });
    });
  }

  // methode de bouton de suuppression d'un account
  /*onClickDeleteAccount(account: Account | undefined) {
    console.log(account);
    if (account) {
      this.bankingService.deleteAccount(account).subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
  */
}
