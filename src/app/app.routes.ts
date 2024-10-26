import { Routes } from '@angular/router';
import { FixturesComponent } from '../fixtures/fixtures.component';
import { ReportComponent } from '../report/report.component';

export const routes: Routes = [
  { path: 'matches', component: FixturesComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
];
