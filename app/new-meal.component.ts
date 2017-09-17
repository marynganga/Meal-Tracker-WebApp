import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
	selector: 'new-meal',
	template: `
		<section class="new-meal">
			<h3>Add meal</h3>
			<div class="form-group">
				<label for="mealName" class="form-label">Name:</label>
				<input #name type="text" class="form-control" required>
			</div> 
			<div class="row no-gutters">
				<div class="col-md-8 form-group">
					<label for="mealDescription" class="form-label">Details:</label>
					<input #description type="text" maxlength="300" class="form-control">
				</div> 
				<div class="col-md-4 form-group">
					<label for="mealCalories" class="form-label">Calories:</label>
					<input #calories type="number" min="0" class="form-control" required>	
				</div> 
			</div>
			<button (click)="submitIsClicked(name.value,description.value,calories.value);name.value='';description.value='';calories.value=''" class="btn btn-info">Submit</button>
		</section>
	`
})

export class NewMealComponent{
		@Output() sendNewMeal = new EventEmitter();
		submitIsClicked(name,description, calories){
			if (name === '' || description === '' || calories === ''){
				alert('Please fill all the fields.');
				
			}else{
			var newMeal = new Meal(name,description,calories);
			this.sendNewMeal.emit(newMeal);
			}
			
		}
}

