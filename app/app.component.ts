import {Component} from '@angular/core';

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
		<div class="well">
		<h3>Meals</h3>
		</div>
		</section>
	</main>
	<footer class="well">
		<p> &copy; 2017 Lisho Meal Tracker </p>
	</footer>
	`
})

export class AppComponent{

}