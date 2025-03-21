import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  imports: [],
  templateUrl: './health-bar.component.html',
  styleUrl: './health-bar.component.scss'
})
export class HealthBarComponent {
  @Input() health!: number;
  
}
