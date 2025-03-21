import { Component } from '@angular/core';
import { ButtonsComponent } from "../shared/buttons/buttons.component";
import { ButtonType } from '../shared/buttons/button.enum';
import { HealthBarComponent } from '../health-bar/health-bar.component';

@Component({
  selector: 'app-container',
  imports: [ButtonsComponent, HealthBarComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  protected ButtonType = ButtonType;
  protected playerHealth: number;

  constructor() {
    this.playerHealth = 100;
  }

}
