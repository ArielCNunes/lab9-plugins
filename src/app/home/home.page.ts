import { Component } from '@angular/core';

// 1 
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

// 3 - Imports
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  // 4
  long:string = "";
  lat:string = "";
  alt:string = "";
  coordinates:any = "";

  constructor() {}

  // 2
  async onButtonClick() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.long = this.coordinates.coords.longitude;
    this.lat = this.coordinates.coords.latitude;
    this.alt = this.coordinates.coords.altitude;
  }

  async openLink() {
    await Browser.open({ url: 'https://www.google.com/index.html' });
  };
}
