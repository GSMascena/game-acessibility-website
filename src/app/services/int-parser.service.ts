import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntParserService {

  constructor() { }

  tryParseInt(str: string | null) : number {
    var returnValue = -1;

    if (str !== null)
      if (str.length > 0) {
        var parsedValue = parseInt(str)
        if (!isNaN(parsedValue))
          returnValue = parsedValue
      }
    console.log("returnValue ", returnValue)
    return returnValue;
  }
}
