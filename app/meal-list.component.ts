import {Component, Input, Output} from '@angular/core';
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
			</div>
		</div>
	`
})

export class MealListComponent{
	@Input() childMealList: Meal[];

}