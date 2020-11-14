import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pro-events',
  templateUrl: './pro-events.component.html',
  styleUrls: ['./pro-events.component.css']
})
export class ProEventsComponent implements OnInit {

  public proEvents:any;
  constructor(private _eventsService:EventsService,
              private _router:Router) { }

  ngOnInit(): void {
    this._eventsService.getProEvents().subscribe((response) => {
      this.proEvents = response;
    }, (err) => {
      this._router.navigate(['/login']);
    });
  }

}
