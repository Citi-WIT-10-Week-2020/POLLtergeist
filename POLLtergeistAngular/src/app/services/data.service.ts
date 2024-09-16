import { Injectable } from '@angular/core';
import {DATA} from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor() { }
/*
  getSurveyTitle() {
    return DATA.question1;
  }

  */

  getQuestion1() {
    return DATA.question1;
  }

  getQuestion2() {
    return DATA.question2;
  }

  getQuestion3() {
    return DATA.question3;
  }

}
