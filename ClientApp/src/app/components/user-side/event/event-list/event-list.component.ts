import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';
import { IRequest } from '../../../../interfaces/Request';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  events: any[] = [];
  calendarEvents: any[] = [];
  calendarOptions!: CalendarOptions; // Explicit typing

  http = inject(HttpService)

  ngOnInit(): void {
    this.http.getEvents().subscribe(data => {
      this.events = data;
      this.calendarEvents = this.formatCalendarEvents(data);
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],  // Register plugins
        events: this.calendarEvents,
        dateClick: this.handleDateClick.bind(this)  // Bind date click
      };
    });
  }

  formatCalendarEvents(events: any[]): any[] {
    return events.map(event => ({
      title: event.name,
      date: event.date
    }));
  }

  handleDateClick(arg: any) {  // Add typing to the 'arg' parameter
    alert('Date clicked: ' + arg.dateStr);
  }

  viewMode = 'list';  // Default view

  showListView() {
  this.viewMode = 'list';
  }

  showCalendarView() {
  this.viewMode = 'calendar';
  }
 
  Book(id:number){
    const request : IRequest = {
      EventId: id,
      UserId: id,
      Status: "In progress",
    };
    console.log(request);
    this.http.CreatRequest(request).subscribe();
  }

}
