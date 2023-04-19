import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentsComponent } from '../components/departments/deparments.component';
import { TimesheetComponent } from '../components/timesheet/timesheet.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component';

const routes: Routes = [
  { path: '',   redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DeparmentsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
