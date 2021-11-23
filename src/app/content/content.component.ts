import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  not_main = false;

  ngOnInit(): void {

  }
  constructor(private router:Router){
    let url = this.router.url
  }
}
