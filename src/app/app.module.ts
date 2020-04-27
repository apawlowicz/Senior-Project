import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './graphs/barchart/barchart.component';
import { PiechartComponent } from './graphs/piechart/piechart.component';
import { LinechartComponent } from './graphs/linechart/linechart.component';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { DataService } from './models/data.service';
import { ArtTemplateComponent } from './templates/art-template/art-template.component';
import { TeamTemplateComponent } from './templates/team-template/team-template.component';

// import { NbThemeService, NbColorHelper } from '../../ngx-admin/node_modules/@nebular/theme';
// import {
//   NbChatModule,
//   NbDatepickerModule,
//   NbDialogModule,
//   NbMenuModule,
//   NbSidebarModule,
//   NbToastrModule,
//   NbWindowModule,
// } from '../../ngx-admin/node_modules/@nebular/theme';
// import { ChartjsBarComponent } from '../../ngx-admin/src/app/pages/charts/chartjs/chartjs-bar.component';
// import { CoreModule } from '../../ngx-admin/src/app/@core/core.module';
// import { ThemeModule } from '../../ngx-admin/src/app/@theme/theme.module';


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
    LinechartComponent,
    ArtTemplateComponent,
    TeamTemplateComponent,

    // ChartjsBarComponent,
    // NbSidebarModule,
    // NbMenuModule,
    // NbDatepickerModule,
    // NbDialogModule,
    // NbWindowModule,
    // NbToastrModule,
    // NbChatModule,
    // CoreModule,
    // ThemeModule,

  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // NbThemeService, 
    // NbColorHelper,

  ],
  providers: [authInterceptorProviders, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
