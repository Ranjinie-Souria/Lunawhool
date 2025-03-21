import { Component, Input } from '@angular/core';
import { ButtonType } from './button.enum';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  
  @Input() type: ButtonType | null = null;
  @Input() action: (type: ButtonType) => void = () => {};

  onClick() {
    if (this.type && this.action) {
      this.action(this.type);
    }
  }

}
