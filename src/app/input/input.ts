import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-input',
  imports: [FormsModule, NzInputModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  value = model('');
}
