import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector: "meal-list",
	template: `
		<div class="well">
			<h3>Meals</h3>
			<div  class="well">
				<h5>Filters</h5>
				<select (change)="onChange($event.target.value)">
					<option value="all" selected="selected">Show All</option>
					<option value="under500">Under 500 Calories</option>
					<option value="over500">Over 500 Calories</option>
				</select>
			</div>
			<div *ngFor="let currentMeal of childMealList | calorieCounter:selectedCalorieOption">
				<p>{{currentMeal.name | uppercase}}</p>
				<p>details: {{currentMeal.description}}</p>
				<p>calories: {{currentMeal.calories}}</p>
				<button (click)="editIsClicked(currentMeal)" class="btn btn-info">Edit</button>
			</div>
		</div>
	`
})

export class MealListComponent{
	@Input() childMealList: Meal[];
	@Output() sendEditClick = new EventEmitter();

	editIsClicked(mealToEdit:Meal){
		this.sendEditClick.emit(mealToEdit);
	}
	public selectedCalorieOption:string = "all";
	onChange(optionFromMenu) {
    this.selectedCalorieOption = optionFromMenu;
  	}
}
 


