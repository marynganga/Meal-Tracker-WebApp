import {Component} from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector: 'my-app',
	template: `
		<div class="container-fluid">
		<nav class="well">
			<p>About</p>
		</nav>
		<header class="jumbotron">
			<h1>Lisho Meal Tracker</h1>
		</header>
		<main>
			<section  class="well">
				<h3>Calories:</h3>
			</section>
			<section  class="well">
				<div  class="well">
					<h5>Filters</h5>
				</div>
				<new-meal (sendNewMeal)="addMeal($event)"></new-meal>
				<meal-list [childMealList]="masterMealList" 
				(sendEditClick)="showDetails($event)"></meal-list>
				<edit-meal [childSelectedMeal]="selectedMeal" 
				(sendDoneClick)="finishedEditing()" ></edit-meal>
			</section>
		</main>
		<footer class="well">
			<p> &copy; 2017 Lisho Meal Tracker </p>
		</footer>
		</div>
	`
})

export class AppComponent{
	public masterMealList: Meal[] = [
		new Meal("Pilau","Accompanied by Kachumbari",700),
		new Meal("Chicken","Accompanied by Kachumbari",700),
		new Meal("Fish","Accompanied by Kachumbari",700),
		new Meal("Ugali Matumbo","Accompanied by Kachumbari",700)
	]
	selectedMeal:Meal = this.masterMealList[0];
	showDetails(clickedMeal:Meal){
		this.selectedMeal = clickedMeal; 
	}

	finishedEditing(){
		this.selectedMeal = null;
	}

	addMeal(newMealFromChild:Meal){
		this.masterMealList.push(newMealFromChild);

	}


}
