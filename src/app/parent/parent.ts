import { Component } from '@angular/core';
import { Child } from '../child/child';
import { ChildTwo } from '../child-two/child-two';

@Component({
  imports: [Child, ChildTwo],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  isClosed = false;
  changeState(){
    this.isClosed = !this.isClosed;
  }

  textColor = "";
  handleChildMessage(message:string){
    this.textColor = message;
  }
}
