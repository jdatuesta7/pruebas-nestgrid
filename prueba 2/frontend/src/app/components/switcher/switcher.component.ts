import { AppComponent } from './../../app.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core'

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {
  @ViewChild('asBtn') button: ElementRef|any;
  @ViewChild('asBtnText') btnText: ElementRef|any;
  @ViewChild('asBody') body: ElementRef|any;


  constructor(
    private _renderer2: Renderer2
  ) { }

  ngOnInit(): void {
  }

  changeTheme(){
    if (document.getElementsByTagName('body')[0].classList.contains('tema--oscuro')) {
      document.getElementsByTagName('body')[0].classList.remove('tema--oscuro');

      let asBtn = this.button.nativeElement;
      this._renderer2.removeChild(asBtn, asBtn.lastChild);
      
      let span = this._renderer2.createElement('span');
      let textBtn = this._renderer2.createText("Tema oscuro");
      this._renderer2.setAttribute(span, 'data-test-id', 'current-theme');
      this._renderer2.appendChild(span, textBtn);
      this._renderer2.appendChild(asBtn, span);

    }else {
      document.getElementsByTagName('body')[0].className = "tema--oscuro";

      let asBtn = this.button.nativeElement;
      this._renderer2.removeChild(asBtn, asBtn.lastChild);

      let span = this._renderer2.createElement('span');
      let textBtn = this._renderer2.createText("Tema claro");
      this._renderer2.setAttribute(span, 'data-test-id', 'current-theme');
      this._renderer2.appendChild(span, textBtn);
      this._renderer2.appendChild(asBtn, span);
    }

  }
}
