import { Component } from '@angular/core';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component';
import { QuartoComponent } from './quarto/quarto.component';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [SecondoComponent, TerzoComponent, QuartoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MancinelliDanieleFilaB';
  name : string = "app";
}
