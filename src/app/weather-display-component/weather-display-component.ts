import { Component, Input, OnChanges } from '@angular/core';
// Dodajanje osnovnih funkcij Angulara.
import { CommonModule } from '@angular/common';
// Dodajanje možnosti pošiljanja HTTP zahtev.
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather-display-component',
  standalone: true, // To je samostojna komponenta.
  // Potrebno za "*ngIf" in HTTP klice.
  imports: [CommonModule, HttpClientModule],
  // Pove kje sta HTML & CSS datoteki te komponente.
  templateUrl: './weather-display-component.html',
  styleUrls: ['./weather-display-component.css']
})

// Glavni razred te komponente, reagira ob spremembah.
export class WeatherDisplayComponent implements OnChanges {
  @Input() location: string = ""; // Prejeta lokacija.
  weatherData: any = null; // Hranijo se podatki o vremenu.

  /* V konstruktor se vključi HttpClient,
     da lahko pošiljaš zahteve API-ju. */
  constructor(private http: HttpClient) {}

  ngOnChanges() {
    // Če se lokacija spremeni & ni prazna...
    if (this.location?.trim()) {
      // ... se pokliče "fetchWeather(lokacija)".
      this.fetchWeather(this.location);
    }
  }

  fetchWeather(location: string) {
    // API ključ se shrani v spremenljivko.
    const apiKey = "bdf62f0b57f04b8c95594640250107";
    // URL bo poklical API, s ključem in lokacijo.
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    // Pošlje get zahtevo & shrani podatke v "weatherData".
    this.http.get(url).subscribe({
      next: (data) => (this.weatherData = data),
      // Če pride do napake bo izpisalo napako.
      error: (err) => {
        console.error("Error fetching weather: ", err);
        this.weatherData = null;
      }
    });
  }
}