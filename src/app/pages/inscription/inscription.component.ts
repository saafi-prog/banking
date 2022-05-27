import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  public signUpForm!: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ],
        ],
        confirmPassword: ['', Validators.required],
        iban: ['', Validators.required],
      },

      {
        validator: this.passwordMatchValidator,
        // on met ce validator car il verifie les deux champs password et
        // le champs confirm password, si non on pourrait le mettre dans
        //un tableau comme le password.
      }
    );
  }

  // la méthode pour vérifier si le mot de passe de confirmation
  // est le mme que le mot de passe saisie.
  passwordMatchValidator(form: FormGroup) {
    // if(form.get('password') !== null) {
    //   if(form.get('password').value) {

    //   }
    // }
    // => résumé en form.get('password')?.value
    // Le point d'intérrogation permet de ne pas
    // accéder à la valeur de 'value' si le password est 'null'
    if (form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  // methode de soumission du formulaire avec le bouton.
  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm.value);
    //{"userNAme":"","password":"", "confirmPassw
    const userName = this.signUpForm.value.username;
    const password = this.signUpForm.value.password;
    const confirmPassword = this.signUpForm.value.confirmPassword;
    const iban = this.signUpForm.value.iban;

    // je transfère la valeur de mes champs userName et password
    // dans 2 constances pour plus de facilité de manipulation
    this.router.navigateByUrl('/');
    this.authService
      .registerUser(userName, password, confirmPassword, iban)
      .subscribe((responseApi) => {
        console.log(responseApi);
      });
  }
}

/**
 * on est dans un flux asynchrone qui correspond au fetch . c'est comme ci :
 * fetch("http://url").then((resp) => {
 *  return resp.json()
 * }).then((reponseApi) => {
 *  console.log(reponseApi);
 * })
 *
 * service
 *
 * logUser(){
 * return fetch}
 */
