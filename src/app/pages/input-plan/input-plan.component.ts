import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../gemini.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-input-plan',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './input-plan.component.html',
  styleUrl: './input-plan.component.css'
})
export class InputPlanComponent {

  location: string = '';
  travelers: number = 1;
  startDate: string = '';
  endDate: string = '';
  tripType: string = '';
  budget: number = 0;
  accommodation: string = '';
  activities: string = '';
  transportation: string = '';
  mealPreferences: string = '';
  specialRequirements: string = '';
  tripPace: string = '';

  prompt: string = '';
  tripPlan: string = ''; 
  isLoading: boolean = false;

  geminiService:GeminiService = inject(GeminiService);

  createPrompt(): void {
    this.prompt = `
      Plan a trip to ${this.location}.
      Number of Travelers: ${this.travelers}.
      Dates: ${this.startDate} to ${this.endDate}.
      Trip Type: ${this.tripType}.
      Budget: ${this.budget} USD.
      Accommodation Preference: ${this.accommodation}.
      Preferred Activities: ${this.activities}.
      Transportation Mode: ${this.transportation}.
      Meal Preferences: ${this.mealPreferences}.
      Special Requirements: ${this.specialRequirements}.
      Trip Pace: ${this.tripPace}.
    `;
  }

   async sendData(){
    this.isLoading = true;
    this.createPrompt();
    this.tripPlan = await this.geminiService.generateText(this.prompt); 
    this.isLoading = false;

  }

}
