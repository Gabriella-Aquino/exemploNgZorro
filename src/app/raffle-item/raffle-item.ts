import { Component, input } from '@angular/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';


@Component({
  selector: 'app-raffle-item',
  imports: [NgmMotionDirective],
  templateUrl: './raffle-item.html',
  styleUrl: './raffle-item.css',
})
export class RaffleItem {
  raffleItem = input.required<string>();
}
