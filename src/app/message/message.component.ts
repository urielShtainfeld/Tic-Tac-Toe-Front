import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() header;
  @Input() name;
  @Input() errorMessage;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
   this.activeModal.dismiss();
  }

}
