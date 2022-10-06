import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { RequirementComponent } from './createrequirement/requirement.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { MappingComponent } from './mapping/mapping.component';
import { OfferComponent } from './offer/offer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileMappingComponent } from './profile-mapping/profile-mapping.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReportsComponent } from './reports/reports.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProfileComponent } from './profile-edit/profile.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    RequirementComponent,
    ProjectComponent,
    SkillsComponent,
    MappingComponent,
    OfferComponent,
    FeedbackComponent,
    ProfileComponent,
    ProfileMappingComponent,
    SchedulingComponent,
    ReportsComponent,
    ProjectupdateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class HomeModule { }
