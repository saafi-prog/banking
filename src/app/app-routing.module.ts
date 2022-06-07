import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AuthGuard } from './guards/auth.guard';
import { PageProfilComponent } from './pages/page-profile/page-profil.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { PageProfileCreateComponent } from './pages/page-profile-create/page-profile-create.component';

const routes: Routes = [
  { path: '', component: PageAcceuilComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },

  { path: 'compte', canActivate: [AuthGuard], component: CompteComponent },

  { path: 'profil', canActivate: [AuthGuard], component: PageProfilComponent },

  { path: 'profil/update', component: UpdateProfileComponent },

  {
    path: 'profilCreate',
    canActivate: [AuthGuard],
    component: PageProfileCreateComponent,
  },

  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
