import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { track } from '@builder.io/sdk-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo';

  ngOnInit(): void {
    track({
      type: 'conversion',
      amount: 500,
      // Replace this with the Public API Key from your Builder account
      apiKey: 'd6151a3b3c4f49dda6bb6c6541d060ee'
    });
  }
}
