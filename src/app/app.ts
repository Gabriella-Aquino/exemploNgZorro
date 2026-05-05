import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Input } from './input/input';

@Component({
  selector: 'app-root',
  imports: [NzButtonModule, Input],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testeNgZorro');
  protected readonly appValue = signal('');
}
