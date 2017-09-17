import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector: "meal-list",
	template: `
			<!-- display a dropdown to filter displayed info -->
			<div  class="filter">
				<select (change)="onChange($event.target.value)" class="form-control">
					<option value="all" selected="selected">Show All</option>
					<option value="under500">Under 500 Calories</option>
					<option value="over500">Over 500 Calories</option>
				</select>
			</div>
			<div class="mealsSection">
				<h3>Meals Added</h3> 
				<!-- display all the meals using *ngFor loop -->
				<div class="eachMeal" *ngFor="let currentMeal of childMealList | calorieCounter:selectedCalorieOption">
					<p class="name">{{currentMeal.name | uppercase}}</p>
					<div class="details">
						<p>Details: <span>{{currentMeal.description}}</span></p>
					</div>
					<div class="calories">
						<p>Calories: <span>{{currentMeal.calories}}</span></p>
					</div>
					<button (click)="showDetails(currentMeal)" class="btn btn-info">Edit</button>
					</div>
					<!-- when edit is clicked call upon the edit-meal tag with the form -->
					<edit-meal [childSelectedMeal]="selectedMeal"
					(sendDoneClick)="finishedEditing()"></edit-meal>
					

			</div>
	`
})

export class MealListComponent{
	/* bring in the list of meals array */
	@Input() childMealList: Meal[];

	@Output() 
	/* create a property to hold the value chosen in the filter */
	/* set default value to show all meals */
	public selectedCalorieOption:string = "all";
	/* a function that changes the value chosen to be used by the filter */
	onChange(optionFromMenu) {
    this.selectedCalorieOption = optionFromMenu;
  	}
	/* create a property to hold the chosen meal when edit is clicked */
	/* set default to none so as to hide the form when edit is not yet clicked */
  	selectedMeal:Meal = null;
  	/* a function that takes in the chosen meal thereby showing the form when edit is clicked */
	showDetails(clickedMeal:Meal){
		this.selectedMeal = clickedMeal; 
	}
  	/* a function that reverts the property value to null thus hiding the form when done is clicked */
	finishedEditing(){
		this.selectedMeal = null;
	}
}
 

























