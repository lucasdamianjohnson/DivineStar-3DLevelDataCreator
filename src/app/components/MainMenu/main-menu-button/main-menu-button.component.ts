import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrls: ['./main-menu-button.component.scss']
})
export class MainMenuButtonComponent implements OnInit {

  @Input() option: string; 
  @Input() activeOption: string;
  constructor() { }

  setOption(option: string) : void
  {
    console.log("set option");
    this.option = option;
  }

  ngOnInit(): void {
  }

}
