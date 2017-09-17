import {Component} from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector: 'my-app',
	template: `
		<div class="container-fluid">
		<header class="jumbotron">
			<h1><img src="../resources/images/logo4.png" alt="Logo">Lisho Meal Tracker</h1>
		</header>
		<main>
			<section  class="main">
				
			<!-- Call the tag for creating a new meal, with its custom event emitter -->
				<new-meal (sendNewMeal)="addMeal($event)"></new-meal>
			<!--Display the list of meals entered by the user, connect it to the list in appcomponent --> 
				<meal-list [childMealList]="masterMealList"></meal-list>
			</section>
		</main>
		<footer>
			<p> &copy; 2017 Lisho Meal Tracker </p>
		</footer>
		</div>
	`
})

export class AppComponent{
	/* An shareable array of the meals entered by the user */
	public masterMealList: Meal[] = [
	]

	/* A function to add a new meal to the array */
	addMeal(newMealFromChild:Meal){
		this.masterMealList.unshift(newMealFromChild);

	}


}

