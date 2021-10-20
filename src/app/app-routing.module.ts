import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { PageNoteFountComponent } from './page-note-fount/page-note-fount.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'student-dash',component:StudentDashComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'about-Us',component:AboutUsComponent},
  {path:'**',component:PageNoteFountComponent},




 // { path: '**', component: PageNoteFountComponent },  // Wildcard route for a 404 page 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
