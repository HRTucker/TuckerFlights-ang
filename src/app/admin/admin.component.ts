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
    this.retrieveFlightsTable();
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
    this.flightService.postNewFlight(flight);
    window.location.reload();
  }

  updateFlight(flight: Flight){
    this.flightService.updateFlight(flight).subscribe(data => {
      console.log("Updated Flight Posted to Server");
      if(data && data.hasOwnProperty('affected')){
        this.retrieveFlightsTable();
      }
    });
  }

  deleteFlight(flight: Flight){
    if(window.confirm(`Are you sure you would like to delete flight#: ${flight.flightNumber}`)){
      this.flightService.deleteFlight(flight).subscribe(data => {
        console.log("Delete Request Posted to server");
        if(data && data.hasOwnProperty('affected')){
          this.retrieveFlightsTable();
        }
      });
    }  
  }

  retrieveFlightsTable(){
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
      console.log("Flights Table Reloaded");
    })
  }
}
