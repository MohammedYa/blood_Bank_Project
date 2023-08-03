import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingnUpFOrInstitutionComponent } from './singn-up-for-institution/singn-up-for-institution.component';
import { SingnUpHomeComponent } from './singn-up-home/singn-up-home.component';
import { SingnUpFOrUserComponent } from './singn-up-for-user/singn-up-for-user.component';
import { SingninComponent } from './singnin/singnin.component';
import { ReqInstComponent } from './req-inst/req-inst.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import{CampaignsComponent} from './campaigns/campaigns.component'
const routes: Routes = [
  {path:"",redirectTo:"/about",pathMatch:"full"},
  {path:"about",component:SingnUpHomeComponent},
  {path:"reqInst",component:ReqInstComponent},
  {path:"addComp",component:AddCompComponent},
  {path:"compaigns",component:CampaignsComponent},
  //{path:"homeuser",component:SingnUpHomeComponent},
  {path:"singnupInstitution",component:SingnUpFOrInstitutionComponent},
  {path:"singnupUser",component:SingnUpFOrUserComponent},
  {path:"login",component:SingninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
