import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css'],
})
export class PageAcceuilComponent implements OnInit {
  signInError = false;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    const userName = form.value.username;
    const password = form.value.password;

    //this.router.navigateByUrl('/compte'); //ce code est pour tester plustards devra etre appeler suite d'un call api

    const requesteObervable = this.authService.logIn(userName, password); // c'est une méthode service qui est appélé.
    requesteObervable.subscribe({
      next: (resp: any) => {
        console.log(resp);
        console.log(resp.token);
        //stockage de mon token
        //local storage
        // methode en cas de succès de l'authentification
        this.authService.messager.next(true);
        localStorage.setItem('token', resp.token); //Token : ce que mon API renvoie.
        //this.router.navigateByUrl('/compte');
        if (resp.profile === true) {
          this.router.navigateByUrl('/compte');
        } else {
          this.router.navigateByUrl('/profilCreate');
        }
        //methode à appeler en cas d'erreur d'authentification.
      },
      error: (error: any) => {
        //affichage message d'erreur coté page d'accueil
        this.signInError = true;
        console.log(error);
        this.authService.newsletter.next('Erreur de connexion');
      },
    });
  }

  /**
   * .subscribe({
   * next : () =>{*instructions*},
   * error : () => {*instructions*}})
   *
  redirectUser() {
    if (this.isAuthenticated === true) {
      this.router.navigateByUrl('/compte');
    } else {
      this.router.navigateByUrl('/profilCreate');
    }
  }
}
*/
}
