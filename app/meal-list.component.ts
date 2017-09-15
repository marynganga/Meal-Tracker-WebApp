import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector: "meal-list",
	template: `
		<div class="well">
			<h3>Meals</h3>
			<div *ngFor="let currentMeal of childMealList">
				<p>{{currentMeal.name | uppercase}}</p>
				<p>description: {{currentMeal.description}}</p>
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

}


