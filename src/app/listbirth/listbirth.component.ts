import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventApi } from '@fullcalendar/angular'; // useful for typechecking
import { INITIAL_EVENTS} from './event-utils'; 

@Component({
  selector: 'app-listbirth',
  templateUrl: './listbirth.component.html',
  styleUrls: ['./listbirth.component.scss']
})

export class ListbirthComponent implements OnInit {

//public userData:any [];

constructor() { }

ngOnInit(): void {
  /*this.userData=JSON.parse(localStorage.getItem('Users') || '{}')
  console.log(this.userData)*/
}

calendarOptions: CalendarOptions = {
  
  contentHeight: 700,

  dayMaxEvents: true, 
  initialView: 'dayGridMonth',
  views: {
    listDay: { buttonText: 'listDay' },
    listMonth: { buttonText: 'listMonth' },
    listYear: { buttonText: 'listYear' }
  },
  headerToolbar:{
    left: 'prev,next today prevYear nextYear',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay,listDay,listMonth,listYear'
  },
  initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
  //dateClick: this.handleDateClick.bind(this),// bind is important!

  dateClick: function(info) {
    alert('clicked ' + info.dateStr);
  }, 

};

//currentEvents: EventApi[] = [];
//handleDob() {const { calendarOptions } = this;calendarOptions.weekends = !calendarOptions.weekends;}
 
//handleEvents(events: EventApi[]) {this.currentEvents = events;}

//handleDateClick(arg: any) {alert('Tarikh: ' + arg.dateStr) this.dialog.open(arg.dateStr); console.log(this.dialog);}

}