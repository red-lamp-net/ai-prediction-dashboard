import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-wrapper',
  templateUrl: './dashboard-wrapper.component.html',
  styleUrl: './dashboard-wrapper.component.css',
  imports: [SharedModule, RouterOutlet],
  standalone: true,
})
export class DashboardWrapperComponent {}
