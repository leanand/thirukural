import { Injectable } from '@angular/core';
import * as ThirukuralJson from 'assets/json/thirukural.json';

@Injectable()
export class ThirukuralService {

  constructor() { 
    console.log(ThirukuralJson);
  }
  getSections(){
    return ThirukuralJson['sections'];
  }
}
