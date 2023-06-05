import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';

// Declare google variable to avoid TypeScript errors
declare const google: any;

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  map: any;
  markers: any[];
  selectedMarker: any;

  constructor(private locationService: LocationService) {
    this.markers = locationService.getLocations();
  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    const markers:any[] = [];
    this.markers.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: this.map,
        title: location.name
      });
      markers.push(marker);
      marker.addListener('click', () => {
        this.selectMarker(marker);
      });
    });

    // const markerCluster = new MarkerClusterer(this.map);
  }

  highlightMarker(location: any) {
    if (this.selectedMarker) {
      this.selectedMarker.setAnimation(null);
    }
    const marker = this.markers.find((marker) => marker.id === location.id);
    if (marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  selectMarker(marker: any) {
    this.selectedMarker = marker;
    const location = this.markers.find((loc) => loc.name === marker.getTitle());
    if (location) {
      this.locationService.setSelectedLocation(location);
    }
  }
}
