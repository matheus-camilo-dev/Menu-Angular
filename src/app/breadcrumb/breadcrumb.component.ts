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
  @Input()
  cat_slug?:string;
  @Input()
  art_slug?:string;
  @Input()
  cat_title?:string;
  @Input()
  art_title?:string;

  route = '';
  constructor(private router:Router) {
    this.route = this.router.url;
  }

  ngOnInit(): void {
  }
  changeOfRoutes(){
  }

}
