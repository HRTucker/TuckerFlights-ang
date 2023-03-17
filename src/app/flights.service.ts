import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Flight } from './flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {origin: "London", destination: "Paris", flightNumber: 456, departure: new Date('2024-02-20T16:39:33.322Z'), arrival: new Date('2024-02-20T18:39:33.322Z'), nonstop: true},
    {origin: "Birmingham", destination: "Vienna", flightNumber: 546, departure: new Date('2024-02-23T14:39:33.322Z'), arrival: new Date('2024-02-23T15:39:33.322Z'), nonstop: true},
    {origin: "London", destination: "Berlin", flightNumber: 859, departure: new Date('2024-02-20T12:39:33.322Z'), arrival: new Date('2024-02-20T13:39:33.322Z'), nonstop: true},
    {origin: "Oslo", destination: "Stockholm", flightNumber: 124, departure: new Date('2024-02-29T09:39:33.322Z'), arrival: new Date('2024-02-29T11:39:33.322Z'), nonstop: true},
    {origin: "Birmingham", destination: "Tokyo", flightNumber: 951, departure: new Date('2024-02-12T17:40:33.322Z'), arrival: new Date('2024-02-13T09:39:33.322Z'), nonstop: false}
  ];

  constructor() { }

  getFlights() {
    return this.flights;
  }

  postFlight(flight:Flight){

  }

  deleteFlight(id:number){

  }
}
