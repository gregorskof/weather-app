import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Uvozi komponento, ki prikazuje vreme.
import { WeatherDisplayComponent } from './weather-display-component/weather-display-component';

/* Omogoči uporabo [(ngModel)] za povezavo
   med inputom in spremenljivko. */
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root', // Definiranje glavne komponente.
  // Vključuje module in komponente.
  imports: [RouterOutlet, WeatherDisplayComponent, FormsModule],
  // Pove kje sta HTML & CSS datoteki glavne komponente.
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// Glavni razred te komponente.
export class App {
  protected title = 'weather-app';
  findUserLocation: string = ""; // Vnešena lokacija.

  // Funkcija, ki se zažene ob kliku gumba.
  searchWeather() {
    // Izpis lokacije v konzolo.
    console.log("Searching for: ", this.findUserLocation);
  }
}