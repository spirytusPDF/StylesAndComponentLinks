import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-two',
  styleUrl: './child-two.css',
  templateUrl: './child-two.html',
})
export class ChildTwo {
  onColorSend = output<string>(); 

  sendColor(color: string){
    this.onColorSend.emit(color);
  }
}
