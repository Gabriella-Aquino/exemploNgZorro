import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleItem } from './raffle-item';

describe('RaffleItem', () => {
  let component: RaffleItem;
  let fixture: ComponentFixture<RaffleItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleItem],
    }).compileComponents();

    fixture = TestBed.createComponent(RaffleItem);
    fixture.componentRef.setInput('raffleItem', 'Teste');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
