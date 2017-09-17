import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
	selector: "edit-meal",
	template: `
		<section class="edit-meal">
		<!-- display a form containing the selected meals previously entered info for editing -->
			<div *ngIf="childSelectedMeal">
				<h3>Edit Meal</h3>
				<div class="form-group">
					<label for="mealName" class="form-label">Name:</label>
					<input [(ngModel)]="childSelectedMeal.name" #name id="mealName" type="text" class="form-control" required>
				</div> 
				<div class="row no-gutters">
					<div class="col-md-8 form-group">
						<label for="mealDescription" class="form-label">Details:</label>
						<input [(ngModel)]="childSelectedMeal.description" maxlength="300" #description id="mealDescription" type="text"  class="form-control" >
					</div> 
					<div class="col-md-4 form-group">
						<label for="mealCalories" class="form-label">Calories:</label>
						<input [(ngModel)]="childSelectedMeal.calories" #calories id="mealCalories" type="number" min="0" class="form-control" required>	
					</div> 
				</div> 
				<!-- perform a function which contains the new data as parameters when done is clicked -->
				<button (click)="doneIsClicked(name.value,description.value, calories.value)"class="btn btn-info">Done</button>
			</div>
		</section>
	`
})

export class EditMealComponent {
	/* bring in the meal within which the edit button was clicked */
	@Input() childSelectedMeal:Meal;
	/* create a custom event emitter */
	@Output() sendDoneClick = new EventEmitter();
	/* send the custom event emitter with the new data when done is clicked */
	doneIsClicked(name,description, calories){
		/*validate that all the fields have info before sending the data */
		if (name === '' || description === '' || calories === ''){
				alert('Please fill all fields.');				
			}else{
				this.sendDoneClick.emit();
			}
	}

}
