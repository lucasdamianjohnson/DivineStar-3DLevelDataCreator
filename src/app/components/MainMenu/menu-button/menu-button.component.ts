import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Input() option: string;


  constructor() { }

  ngOnInit(): void {
  }

}
