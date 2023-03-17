import { Component } from '@angular/core';
import { Flight } from '../flights.model';
import { FlightsService} from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  flights: Flight[] = this.flightsService.getFlights();

  constructor(private flightsService: FlightsService) {
    
  }

  ngOnInit(): void {

  }

  getFlights(): void{

  }
}
