import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';

@Component({
  selector: 'app-free-events',
  templateUrl: './free-events.component.html',
  styleUrls: ['./free-events.component.css']
})
export class FreeEventsComponent implements OnInit {

  public freeEvents:any;
  constructor(private _eventsService:EventsService) { }

  ngOnInit(): void {
    this._eventsService.getFreeEvents().subscribe((response) => {
      this.freeEvents = response;
    });
  }

}
