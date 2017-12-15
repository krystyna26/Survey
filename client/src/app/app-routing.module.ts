import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import components
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VoteComponent } from './vote/vote.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: "",                pathMatch: "full", component: LoginComponent},
  {path: "home",            pathMatch: "full", component: HomepageComponent},
  {path: "create_survey",   pathMatch: "full", component: CreateComponent},
  {path: "goto_survey/:id", pathMatch: "full", component: VoteComponent},
  {path: "delete/:id" ,     pathMatch: "full", component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
