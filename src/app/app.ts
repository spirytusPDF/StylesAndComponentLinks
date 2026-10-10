import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Parent } from './parent/parent';
import { Child } from './child/child';

@Component({
  imports: [NgClass, NgStyle, Parent, Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  currentActive = "A";

  toggleActive(active: string) {
    this.currentActive = active;
  }

  darkTheme = false;
  changeTheme(){
    this.darkTheme = !this.darkTheme;
  }

  status = "online";
  onSelectionChange(value:string){
    this.status = value;
  }
}
