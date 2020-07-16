import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalheaderService {
  visible: boolean;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

}
