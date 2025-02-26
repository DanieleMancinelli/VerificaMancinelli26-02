import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  standalone: true,
  imports: [],
  templateUrl: './quarto.component.html',
  styleUrl: './quarto.component.css'
})
export class QuartoComponent {
  name : string = "quarto";
}