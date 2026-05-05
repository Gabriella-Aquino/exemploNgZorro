import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Input } from './input/input';
import { RaffleItem } from './raffle-item/raffle-item';

@Component({
  selector: 'app-root',
  imports: [NzButtonModule, Input, RaffleItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testeNgZorro');
  protected readonly appValue = signal('');
  protected readonly raffleItems = signal<string[]>([]);

  protected addRaffleItem(): void {
    const itemName = this.appValue().trim();

    if (!itemName) {
      return;
    }

    this.raffleItems.update((items) => [...items, itemName]);
    this.appValue.set('');
  }
}
