import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [],
  templateUrl: './terzo.component.html',
  styleUrl: './terzo.component.css'
})
export class TerzoComponent {
  name : string = "terzo";
}