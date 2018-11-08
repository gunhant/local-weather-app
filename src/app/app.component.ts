import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] */
  template: `
    <div>
      <mat-toolbar color="primary">
        <span>LocalCast Weather</span>
      </mat-toolbar>
      <div style="text-align:center"><h1>Your city, your forecast, right now!</h1></div>
      <div fxLayoutAlign="center">
        <app-city-search></app-city-search>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <div fxFlex="300px">
          <mat-card>
          <h2>Current Weather</h2>
          <app-current-weather></app-current-weather>
          </mat-card>
        </div>
        <div fxFlex></div>
    </div>
  `
})
export class AppComponent {
  /* title = 'local-weather-app'; */
}
