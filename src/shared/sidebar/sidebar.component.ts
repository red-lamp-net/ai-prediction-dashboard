import { Component, OnInit, signal } from '@angular/core';
import { ROUTES } from '../constants';
import { Route } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  isCollapsed = false;
  currentRoute: string | undefined = '';
  routes = signal<Route[]>(ROUTES);

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
}
