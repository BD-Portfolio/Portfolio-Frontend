import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VisitorSignInComponent } from './pages/visitor-sign-in/visitor-sign-in.component';
import { ServicesComponent } from './pages/services/services.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutMeComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    VisitorSignInComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactMeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
