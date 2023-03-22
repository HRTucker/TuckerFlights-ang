import { Injectable, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from './flights.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  /*
  flights: Flight[] = [
    {origin: "London", destination: "Paris", flightNumber: 456, departure: new Date('2024-02-20T16:39:33.322Z'), arrival: new Date('2024-02-20T18:39:33.322Z'), nonstop: true},
    {origin: "Birmingham", destination: "Vienna", flightNumber: 546, departure: new Date('2024-02-23T14:39:33.322Z'), arrival: new Date('2024-02-23T15:39:33.322Z'), nonstop: true},
    {origin: "London", destination: "Berlin", flightNumber: 859, departure: new Date('2024-02-20T12:39:33.322Z'), arrival: new Date('2024-02-20T13:39:33.322Z'), nonstop: true},
    {origin: "Oslo", destination: "Stockholm", flightNumber: 124, departure: new Date('2024-02-29T09:39:33.322Z'), arrival: new Date('2024-02-29T11:39:33.322Z'), nonstop: true},
    {origin: "Birmingham", destination: "Tokyo", flightNumber: 951, departure: new Date('2024-02-12T17:40:33.322Z'), arrival: new Date('2024-02-13T09:39:33.322Z'), nonstop: false}
  ];
  */
  
  backEndURL: string;

  constructor(private http: HttpClient) { 
    this.backEndURL = this.getBackEndURL();
  }

  /*
  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3000/flights/');
  }*/

  //Get a list of all flights
  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`)
  }

  //Get all flights with the desired origin and destination
  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }

  //Send a new flight listing to be stored in the back-end
  postNewFlight(flight: Flight){
    return this.http.post(`http://localhost:3000/flights`, flight).subscribe(data => {
      console.log("New Flight Posted to Server");
    })
  }

  //Send an updated version of a flight, flight indicated by unique id and updated flight information sent via @Patch body to the back-end
  updateFlight(flight: Flight){
    return this.http.patch(`${this.backEndURL}/flights/${flight.id}/update`, flight);
  }

  //Request the deletion of a flight, indication only by its unique id
  deleteFlight(flight: Flight){
    return this.http.delete(`${this.backEndURL}/flights/${flight.id}/delete`);
  }

  getOrigins(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/origins`)
  }

  getDestinations(): Observable<any>{
    return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
  }

  getBackEndURL(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2]) ? 'http://localhost:3000' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }
}
