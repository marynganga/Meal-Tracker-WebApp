import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
	selector: "edit-meal",
	template: `
		<div *ngIf="childSelectedMeal">
			<div class="form-group">
				<label for="mealName" class="form-label">Name:</label>
				<input [(ngModel)]="childSelectedMeal.name" #name id="mealName" type="text" class="form-control" required>
			</div> 
			<div class="form-group">
				<label for="mealDescription" class="form-label">Details:</label>
				<input [(ngModel)]="childSelectedMeal.description" #description id="mealDescription" type="text"  class="form-control" >
			</div> 
			<div class="form-group">
				<label for="mealCalories" class="form-label">Calories:</label>
				<input [(ngModel)]="childSelectedMeal.calories" #calories id="mealCalories" type="number" min="0" class="form-control" required>	
			</div> 
			<button (click)="doneIsClicked(name.value,description.value, calories.value)"class="btn btn-info">Done</button>
		</div>
	`
})

export class EditMealComponent {
	@Input() childSelectedMeal:Meal;
	@Output() sendDoneClick = new EventEmitter();
	doneIsClicked(name,description, calories){
		if(typeof(name) === )
		if (name === '' || description === '' || calories === ''){
				alert('Please fill all fields.');
				
			}else{
				this.sendDoneClick.emit();
			}
	}

}
