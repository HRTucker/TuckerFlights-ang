import { Component,OnInit} from '@angular/core';
import { Flight } from '../flights.model';
import { FlightsService} from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights!: Flight[];
  selectedOrigin!: string;
  selectedDestination!: string;
  originList!: any[];
  destinationList!: any[];

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    console.log("Angular Started")
    this.flightsService.getOrigins().subscribe(data =>{
      this.originList = data;
    }); 

    this.flightsService.getDestinations().subscribe(data =>{
      this.destinationList = data;
    });

    this.flightsService.getAllFlights().subscribe(data =>{
      this.flights = data;
    })
  }

  query(): void{
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data =>{
      this.flights = data;
    })
  }

  capFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
