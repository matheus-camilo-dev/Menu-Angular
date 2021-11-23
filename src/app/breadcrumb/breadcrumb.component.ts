import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  url?:string;

  route = '';
  constructor(private router:Router) {
    this.route = this.router.url;
    console.log("breadcrumb: ", this.url)
  }

  ngOnInit(): void {
  }
  changeOfRoutes(){
    console.log(this.router.url)
    console.log('abc')
  }

}