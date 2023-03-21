import { Component, OnInit } from '@angular/core';
import { Flight } from '../flights.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  origin!: string;
  destination!: string;
  flightNumber!: number;
  departure!: Date;
  arrival!: Date;
  nonstop: boolean = false;

  flightList!: Flight[];

  constructor(private flightService: FlightsService){
  }

  ngOnInit(): void{
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
    })
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightNumber: this.flightNumber,
      departure: this.departure,
      arrival: this.arrival,
      nonstop: this.nonstop
    }
    console.log(flight);
    this.flightService.postFlight(flight);
  }
}
