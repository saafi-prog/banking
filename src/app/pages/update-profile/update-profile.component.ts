import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserProfil } from 'src/app/models/update-user-profil';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  public upDateForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bankingService: BankingService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.bankingService
        .getCurrentUserProfile()
        .subscribe((updateUserProfile: UpdateUserProfil) => {
          this.upDateForm = this.fb.group({
            firstName: [updateUserProfile.firstName, Validators.required],
            lastName: [updateUserProfile.lastName, Validators.required],
            mobilePhone: [updateUserProfile.mobilePhone, Validators.required],
            threshold: [updateUserProfile.threshold, Validators.required],
          });
        });
    });
  }

  /*
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.bankingService.getAccounCurrentUser().subscribe((account: any) => {
        this.upDateForm = this.fb.group({
          Nom: [account.firstName, Validators.required],
          Prenom: [account.lastName, Validators.required],
          username: [account.username, Validators.required],
          iban: [account.iban, Validators.required],
        });
      });
    });
    */

  onSubmit() {
    const profileToUpdate = this.upDateForm.value;

    this.bankingService.updateProfile(profileToUpdate).subscribe((resp) => {
      this.router.navigateByUrl('/profil');
    });
  }
}
