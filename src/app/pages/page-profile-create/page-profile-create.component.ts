import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfil } from 'src/app/models/user-profil';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-page-profile-create',
  templateUrl: './page-profile-create.component.html',
  styleUrls: ['./page-profile-create.component.css'],
})
export class PageProfileCreateComponent implements OnInit {
  public createProfileForm!: FormGroup;

  constructor(
    private bankingService: BankingService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      iban: ['', Validators.required],
      threshold: ['', Validators.required],
    });
  }

  onSubmitCreateProfile() {
    const newUserProfile = new UserProfil(
      this.createProfileForm.value.firstName,
      this.createProfileForm.value.lastName,
      this.createProfileForm.value.mobilePhone,
      this.createProfileForm.value.iban,
      this.createProfileForm.value.threshold
    );
    console.log(newUserProfile);
    this.bankingService.createProfile(newUserProfile).subscribe(() => {
      console.log('profil créé!!');
      this.router.navigateByUrl('/profil');
    });
  }
}
