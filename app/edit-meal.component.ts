import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
	selector: "edit-meal",
	template: `
			<div class="form-group">
				<label for="mealName" class="form-label">Name:</label>
				<input [(ngModel)]="childSelectedMeal.name" id="mealName" type="text" class="form-control" required>
			</div> 
			<div class="form-group">
				<label for="mealDescription" class="form-label">Description:</label>
				<input [(ngModel)]="childSelectedMeal.description" id="mealDescription" type="text"  class="form-control" >
			</div> 
			<div class="form-group">
				<label for="mealCalories" class="form-label">Calories:</label>
				<input [(ngModel)]="childSelectedMeal.calories" id="mealCalories" type="number" min="0" class="form-control" required>	
			</div> 
			<button (click)="doneIsClicked()"class="btn btn-info">Done</button>
	`
})

export class EditMealComponent {
	@Input() childSelectedMeal:Meal;
	@Output() sendDoneClick = new EventEmitter();
	doneIsClicked(){
		this.sendDoneClick.emit();
	}

}