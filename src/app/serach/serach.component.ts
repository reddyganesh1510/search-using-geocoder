import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css'],
})
export class SerachComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  location = 'Banglore';
  locationforapi = {
    longitude: '12.972442',
    latitude: '77.580643',
  };

  searchCooks() {
    var fd = new FormData();
    fd.append('location', JSON.stringify(this.locationforapi));
    this.http
      .post('https://api.dev.chefed.co/chefed /api/v1/cook/filter', fd)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  searchBoxClicked() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
          console.log(resp.coords.longitude);

          // geocoder: google.maps.Geocoder
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
