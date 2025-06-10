import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { }


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}

