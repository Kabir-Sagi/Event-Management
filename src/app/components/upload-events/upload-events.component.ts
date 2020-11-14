import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-events',
  templateUrl: './upload-events.component.html',
  styleUrls: ['./upload-events.component.css']
})
export class UploadEventsComponent implements OnInit {

  public event:any = {
      name : '',
      url : '',
      date : '',
      type : ''
  };
  public successMsg = '';
  public emptyForm;
  constructor(private _eventsService:EventsService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  // public Upload Events
  public submitUpload(){
    if(this.event.name !== '' && this.event.url !== '' && this.event.date !== '' && this.event.type !== ''){
        this._eventsService.uploadEvents(this.event).subscribe((response) => {
          this.successMsg = response;
          this.emptyForm = false;
          if(this.event.type === 'FREE'){
            this._router.navigate(['/events']);
          }
          if(this.event.type === 'PRO'){
            this._router.navigate(['pro-events']);
          }
        });

    }
    else{
      this.emptyForm = true;
    }
  }

}
