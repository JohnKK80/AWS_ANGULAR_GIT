import { Footballer } from './footballer.module';

export class Club{

    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: Date;
    clubColors: string;
    venue:string;
    squad: Footballer[];


    constructor(
        id: number,
        name: string,
        shortName: string,
        tla: string,
        crestUrl: string,
        address: string,
        phone: string,
        website: string,
        email: string,
        founded: Date,
        clubColors: string,
        venue: string,
        squad?: Footballer[]
    ){
        this.id = id;
         this.name = name;
         this.shortName = shortName;
        this.tla = tla;
        this.crestUrl = crestUrl;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.email = email;
        this.founded = founded;
        this.clubColors = clubColors;
        this.venue = venue
    }
    
}