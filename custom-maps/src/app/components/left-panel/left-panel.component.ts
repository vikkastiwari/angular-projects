import { Component, EventEmitter, Output } from '@angular/core';
import { LocationService } from '../../service/location.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  @Output() locationSelected = new EventEmitter<any>();
  locations: any[];

  constructor(private locationService: LocationService) {
    this.locations = locationService.getLocations();
  }

  highlightMarker(location: any) {
    this.locationSelected.emit(location);
  }

  selectLocation(location: any) {
    this.locationService.setSelectedLocation(location);
  }
}
