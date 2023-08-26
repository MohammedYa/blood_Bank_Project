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
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ReqInstComponent } from './req-inst/req-inst.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { DonatReqComponent } from './donat-req/donat-req.component';
import { PurchReqComponent } from './purch-req/purch-req.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingnUpHomeComponent,
    SingnUpFOrUserComponent,
    SingnUpFOrInstitutionComponent,
    SingninComponent,
    CampaignsComponent,
    ReqInstComponent,
    AddCompComponent,
    UserHomeComponent,
    DonatReqComponent,
    PurchReqComponent,
    LoginHomeComponent,
    NotFoundComponent,
    
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
