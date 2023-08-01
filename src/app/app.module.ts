import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingnUpHomeComponent } from './singn-up-home/singn-up-home.component';
import { SingnUpFOrUserComponent } from './singn-up-for-user/singn-up-for-user.component';
import { SingnUpFOrInstitutionComponent } from './singn-up-for-institution/singn-up-for-institution.component';
import { SingninComponent } from './singnin/singnin.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingnUpHomeComponent,
    SingnUpFOrUserComponent,
    SingnUpFOrInstitutionComponent,
    SingninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
