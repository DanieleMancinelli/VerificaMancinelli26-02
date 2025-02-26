import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './secondo.component.html',
  styleUrl: './secondo.component.css'
})
export class SecondoComponent {
  name : string = "secondo";
}
