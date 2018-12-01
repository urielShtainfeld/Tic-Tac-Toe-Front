import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent  {

  public key;
  public xChosen: boolean[][];
  public oChosen: boolean[][];

  constructor(private api: ApiService, private modalService: NgbModal) {
    this.initOArray();
    this.initXArray();
  }

  public initGame() {
    console.log('initGame');
    this.initOArray();
    this.initXArray();
    this.openMessage('סטטוס', 'המשחק התחיל מחדש');
  }
  private initXArray() {
    this.xChosen = [];
    for (let i = 0; i < 3; i++) {
      this.xChosen[i] = [];
      for (let j = 0; j < 3; j++) {
          this.xChosen[i][j] = false;
      }
  }
  }
  private initOArray() {
    this.oChosen = [];
    for (let i = 0; i < 3; i++) {
      this.oChosen[i] = [];
      for (let j = 0; j < 3; j++) {
          this.oChosen[i][j] = false;
      }
  }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    console.log(this.key);
    switch (this.key) {
      case 'q': if (this.api.move(1, 1, 1)) {           this.drawX(1, 1);         } break;
      case 'w': if (this.api.move(2, 1, 1)) {           this.drawX(1, 2);         } break;
      case 'e': if (this.api.move(3, 1, 1)) {           this.drawX(1, 3);         } break;
      case 'a': if (this.api.move(1, 2, 1)) {           this.drawX(2, 1);         } break;
      case 's': if (this.api.move(2, 2, 1)) {           this.drawX(2, 2);         } break;
      case 'd': if (this.api.move(2, 3, 1)) {           this.drawX(2, 3);         } break;
      case 'z': if (this.api.move(3, 1, 1)) {           this.drawX(3, 1);         } break;
      case 'x': if (this.api.move(3, 2, 1)) {           this.drawX(3, 2);         } break;
      case 'c': if (this.api.move(3, 3, 1)) {           this.drawX(3, 3);         } break;
      case '7': if (this.api.move(1, 1, 2)) {           this.drawO(1, 1);         } break;
      case '8': if (this.api.move(2, 1, 2)) {           this.drawO(1, 2);         } break;
      case '9': if (this.api.move(3, 1, 2)) {           this.drawO(1, 3);         } break;
      case '4': if (this.api.move(1, 2, 2)) {           this.drawO(2, 1);         } break;
      case '5': if (this.api.move(2, 2, 2)) {           this.drawO(2, 2);         } break;
      case '6': if (this.api.move(2, 3, 2)) {           this.drawO(2, 3);         } break;
      case '1': if (this.api.move(3, 1, 2)) {           this.drawO(3, 1);         } break;
      case '2': if (this.api.move(3, 2, 2)) {           this.drawO(3, 2);         } break;
      case '3': if (this.api.move(3, 2, 2)) {           this.drawO(3, 3);         } break;
    }
  }
  private drawX(x: number , y: number) {
    this.xChosen[x - 1][y - 1] = true;
  }
  private drawO(x: number , y: number) {
    this.oChosen[x - 1][y - 1] = true;
  }

  openMessage(hdr: string , bdy: string) {
    const modalRef = this.modalService.open(MessageComponent);
    modalRef.componentInstance.header = hdr;
    modalRef.componentInstance.name = bdy;
  }
}
