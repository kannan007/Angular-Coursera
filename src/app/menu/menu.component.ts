import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

  constructor(private _dishService: DishService) {}

  ngOnInit() {
    this.dishes = this._dishService.getDishes();
  }
}
