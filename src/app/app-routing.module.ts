import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
