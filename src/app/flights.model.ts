export interface Flight{
    id?: number;
    origin: string;
    destination: string;
    flightNumber: number;
    //TODO: Look into Intl API for formating the dates to the correct timezone/style
    departure: Date;
    arrival: Date;
    nonstop: boolean;
}