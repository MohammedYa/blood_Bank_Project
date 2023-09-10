import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingnUpFOrInstitutionComponent } from './singn-up-for-institution/singn-up-for-institution.component';
import { SingnUpHomeComponent } from './singn-up-home/singn-up-home.component';
import { SingnUpFOrUserComponent } from './singn-up-for-user/singn-up-for-user.component';
import { SingninComponent } from './singnin/singnin.component';
import { ReqInstComponent } from './req-inst/req-inst.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import{CampaignsComponent} from './campaigns/campaigns.component'
import { UserHomeComponent } from './user-home/user-home.component';
import { DonatReqComponent } from './donat-req/donat-req.component';
import { PurchReqComponent } from './purch-req/purch-req.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { AuthGuard } from './servies/auth.guard';
import { EmergencyComponent } from './emergency/emergency.component';
import { StatusComponent } from './status/status.component';
const routes: Routes = [
  {path:"",redirectTo:"/about",pathMatch:"full"},
  {path:"about",component:SingnUpHomeComponent},
  {path:"reqInst",canActivate:[AuthGuard],component:ReqInstComponent},
  {path:"addComp",canActivate:[AuthGuard],component:AddCompComponent},
  {path:"compaigns",canActivate:[AuthGuard],component:CampaignsComponent},
  {path:"homeuser",canActivate:[AuthGuard],component:UserHomeComponent},
  {path:"DonatReq",canActivate:[AuthGuard],component:DonatReqComponent},
  {path:"Purchreq",canActivate:[AuthGuard],component:PurchReqComponent},
  {path:"Emergency",canActivate:[AuthGuard],component:EmergencyComponent},
  {path:"status",canActivate:[AuthGuard],component:StatusComponent},
  {path:"singnupInstitution",component:SingnUpFOrInstitutionComponent},
  {path:"singnupUser",component:SingnUpFOrUserComponent},
  {path:"login",component:LoginHomeComponent},
  {path:"loginAsUser/:role",component:SingninComponent},
  {path:"loginAsInst/:role",component:SingninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
