import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CompteComponent } from './pages/compte/compte.component';
import { PageProfilComponent } from './pages/page-profile/page-profil.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { PageProfileCreateComponent } from './pages/page-profile-create/page-profile-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent,
    NavBarComponent,
    InscriptionComponent,

    FooterComponent,

    PageNotFoundComponent,
    CompteComponent,
    PageProfilComponent,
    UpdateProfileComponent,
    PageProfileCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
