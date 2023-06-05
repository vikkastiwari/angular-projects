import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private selectedLocation: any;

  getLocations() {
    // Replace with your own list of locations
    return [
      { id: 1, name: 'Location 1', lat: 37.7749, lng: -122.4194 },
      { id: 2, name: 'Location 2', lat: 37.7749, lng: -122.4294 },
      { id: 3, name: 'Location 3', lat: 37.7649, lng: -122.4194 },
      { id: 4, name: 'Location 4', lat: 37.7649, lng: -122.4294 }
    ];
  }

  setSelectedLocation(location: any) {
    this.selectedLocation = location;
  }

  getSelectedLocation() {
    return this.selectedLocation;
  }
}
