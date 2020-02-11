import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { PasswordRecoveryComponent } from './home/password-recovery/password-recovery.component';

import { ArtManagementComponent } from './admin/art-management/art-management.component';
import { TeamManagementComponent } from './admin/team-management/team-management.component';
import { MilestonesAlertsComponent } from './admin/milestones-alerts/milestones-alerts.component';

import { TeamHomepageComponent } from './team/team-homepage/team-homepage.component';
import { DataEntryComponent } from './team/data-entry/data-entry.component';
import { DashboardPreviewComponent } from './team/dashboard-preview/dashboard-preview.component';

import { DisplayModeComponent } from './display-mode/display-mode.component';

const appRoutes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'password-recovery', component:PasswordRecoveryComponent },
  { path: 'art-management', component:ArtManagementComponent },
  { path: 'team-management', component:TeamManagementComponent },
  { path: 'milestones-alerts', component:MilestonesAlertsComponent },
  { path: 'team-homepage', component:TeamHomepageComponent },
  { path: 'data-entry', component:DataEntryComponent },
  { path: 'dashboard-preview', component:DashboardPreviewComponent },
  { path: 'display-mode', component:DisplayModeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarchartComponent,
    PiechartComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    ArtManagementComponent,
    TeamManagementComponent,
    MilestonesAlertsComponent,
    TeamHomepageComponent,
    DataEntryComponent,
    DashboardPreviewComponent,
    DisplayModeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot (
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
