import {Component} from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector: 'my-app',
	template: `
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
				<meal-list [childMealList]="masterMealList"></meal-list>
			</section>
		</main>
		<footer class="well">
			<p> &copy; 2017 Lisho Meal Tracker </p>
		</footer>
	`
})

export class AppComponent{
	public masterMealList: Meal[] = [
		new Meal("Pilau","Accompanied by Kachumbari",700),
		new Meal("Pilau","Accompanied by Kachumbari",700),
		new Meal("Pilau","Accompanied by Kachumbari",700),
		new Meal("Pilau","Accompanied by Kachumbari",700)
	]
	console.log(masterMealList);

}