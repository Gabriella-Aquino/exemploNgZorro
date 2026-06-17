import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Input } from './input/input';
import { RaffleItem } from './raffle-item/raffle-item';
import { NgmMotionDirective } from '@scripttype/ng-motion';

interface RaffleItemData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [NzButtonModule, Input, RaffleItem, NgmMotionDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testeNgZorro');
  protected readonly appValue = signal('');
  protected readonly raffleItems = signal<RaffleItemData[]>([]);
  protected readonly selectedRaffleItem = signal('');

  private nextId = 0;

  protected addRaffleItem(): void {
    const name = this.appValue().trim();

    if (!name) {
      return;
    }

    this.raffleItems.update((items) => [...items, { id: this.nextId++, name }]);
    this.appValue.set('');
  }

  protected removeRaffleItem(id: number): void {
    this.raffleItems.update(items => items.filter(i => i.id !== id));
  }

  protected drawRaffleItem(): void {
    const items = this.raffleItems();

    if (!items.length) {
      return;
    }

    const selectedIndex = Math.floor(Math.random() * items.length);
    this.selectedRaffleItem.set(items[selectedIndex].name);
  }
}
