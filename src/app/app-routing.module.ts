import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { PageConfigurationComponent } from './pages/page-configuration/page-configuration.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: PageAcceuilComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },

  {
    path: 'configuration',
    canActivate: [AuthGuard],
    component: PageConfigurationComponent,
  },
  { path: 'compte', canActivate: [AuthGuard], component: CompteComponent },

  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
