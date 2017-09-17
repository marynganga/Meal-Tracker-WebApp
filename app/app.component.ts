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
			<section>
			<div class="about" *ngIf="masterMealList.length===0">
				<h3>About</h3>
				<p>Lisho Meal Tracker is a simple yet elegant website application that lets you log your meals for the day.<br />
				<ul>
					<li>Enter the name of your meal, details and calories consumed and they will all be listed.</li>
					<li>You can also edit your entries if need arises.</li>
					<li>Another great feature is the calorie filter, which allows you to view meals according to whether there caloric content is above or below 500.</li>
				</ul>
				<p>We hope you enjoy our app as it helps you on your journey to a healthier lifestyle.</p>
			</div>	
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
		console.log(this.masterMealList);
		this.masterMealList.unshift(newMealFromChild);

	}


}

