import {Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
	name: "calorieCounter",
	pure: false
})

export class CalorieCheckerPipe implements PipeTransform{
	transform(input: Meal[], calorieAmount){
		var output:Meal[] = [];
		if(calorieAmount === 'under500'){
			for(var i = 0; i < input.length; i++){
				if (input[i].calories <= 500){
					output.push(input[i]);
				}
			}
			return output;
		}else if(calorieAmount === 'over500'){
			for(var i = 0; i < input.length; i++){
				if (input[i].calories > 500){
					output.push(input[i]);
				}
			}
			return output;
		}else{
			return input;
		}
	}

}
