import { Injectable } from '@angular/core';
import {DATA} from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor() { }

  getSurveyTitle() {
    return DATA.title;
  }

  getQuestion1() {
    return DATA.question1;
  }

}
