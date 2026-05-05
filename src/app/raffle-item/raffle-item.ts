import { Component, input } from '@angular/core';

@Component({
  selector: 'app-raffle-item',
  imports: [],
  templateUrl: './raffle-item.html',
  styleUrl: './raffle-item.css',
})
export class RaffleItem {
  raffleItem = input.required()
}
