import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import menuItems from '../menuItems';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  title?: string;
  @Input()
  content?: string;
  @Input()
  url?: string;
  @Input()
  price?: string;
  not_main = true;
  @Input()
  iscat?: string;
  @Input()
  idcat?: string;
  @Input()
  route?: string;
  @Input()
  ismain?: string;
  @Input()
  hasartigo?:string;
  @Input()
  items?:string;

  ngOnInit(): void {
  }
  constructor(private router:Router){
    let url = this.router.url
  }
}
