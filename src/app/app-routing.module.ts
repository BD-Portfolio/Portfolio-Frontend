import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TestComponent } from './pages/test/test.component';
import { VisitorSignInComponent } from './pages/visitor-sign-in/visitor-sign-in.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' }, // for any blank path
  { path: 'home', component: HomeComponent },
  { path: 'visitor-sign-in', component: VisitorSignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'test', component: TestComponent},
  { path: '**', component: HomeComponent } // for any wrong path jumps to Home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
