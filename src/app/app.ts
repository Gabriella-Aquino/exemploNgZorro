import { Component, computed, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Input } from './input/input';
import { RaffleItem } from './raffle-item/raffle-item';
import { NgmMotionDirective, NgmPresenceDirective } from '@scripttype/ng-motion';

interface RaffleItemData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [NzButtonModule, Input, RaffleItem, NgmMotionDirective, NgmPresenceDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testeNgZorro');
  protected readonly appValue = signal('');
  protected readonly raffleItems = signal<RaffleItemData[]>([]);
  protected readonly removingIds = signal<Set<number>>(new Set());
  protected readonly selectedRaffleItem = signal('');
  protected readonly activeItems = computed(() =>
    this.raffleItems().filter(i => !this.removingIds().has(i.id))
  );

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
    this.removingIds.update(set => new Set([...set, id]));
    setTimeout(() => {
      this.raffleItems.update(items => items.filter(i => i.id !== id));
      this.removingIds.update(set => {
        const next = new Set(set);
        next.delete(id);
        return next;
      });
    }, 400);
  }

  protected isPresent(id: number): boolean {
    return !this.removingIds().has(id);
  }

  protected drawRaffleItem(): void {
    const items = this.activeItems();

    if (!items.length) {
      return;
    }

    const selectedIndex = Math.floor(Math.random() * items.length);
    this.selectedRaffleItem.set(items[selectedIndex].name);
  }
}
