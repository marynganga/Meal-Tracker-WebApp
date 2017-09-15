import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
	selector: 'new-meal',
	template: `
			<h3>Add new meal</h3>
			<div class="form-group">
				<label for="mealName" class="form-label">Name:</label>
				<input #name id="mealName" type="text" class="form-control" required>
			</div> 
			<div class="form-group">
				<label for="mealDescription" class="form-label">Description:</label>
				<input #description id="mealDescription" type="text"  class="form-control" >
			</div> 
			<div class="form-group">
				<label for="mealCalories" class="form-label">Calories:</label>
				<input #calories id="mealCalories" type="number" min="0" class="form-control" required>	
			</div> 
			<button (click)="submitIsClicked(name.value,description.value,calories.value);name.value='';description.value='';calories.value=''"class="btn btn-info">Submit</button>
	`
})

export class NewMealComponent{
		@Output() sendNewMeal = new EventEmitter();
		submitIsClicked(name:string,description:string, calories:number){
			var newMeal = new Meal(name,description,calories);
			this.sendNewMeal.emit(newMeal);
			}
}

