import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
    constructor(){}

    createMapUrl(location: string){
        let encodedLocation = encodeURI(location);
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyB90mLtxv0HwXlNxP9fntec31cr0IWIdiM&q=${encodedLocation}`;
    }
}
