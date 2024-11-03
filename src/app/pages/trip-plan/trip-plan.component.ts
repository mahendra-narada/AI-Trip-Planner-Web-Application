import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-plan',
  standalone: true,
  imports: [],
  templateUrl: './trip-plan.component.html',
  styleUrl: './trip-plan.component.css'
})
export class TripPlanComponent {

  constructor(private router: Router) {}

  plantrip(): void {
    this.router.navigate(['/Plan']);
  }
}
