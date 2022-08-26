import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core'

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    if (document.getElementsByTagName('body')[0].classList.contains('tema--oscuro')) {
      document.getElementsByTagName('body')[0].classList.remove('tema--oscuro');
    }else {
      document.getElementsByTagName('body')[0].className = "tema--oscuro";
    }

  }
}
