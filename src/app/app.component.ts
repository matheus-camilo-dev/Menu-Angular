import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';
import menuItems from './menuItems';
import { RouterModule, Router } from '@angular/router';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = menuItems
  items = [1, 2, 3, 4];
  options: FormGroup;
  title = 'menu-angular';
  content = "Isso é apenas um teste!"
  url = ''
  arrayurl = ['', '']
  newurl = ''
  rota = '';
  idCat = 0;
  isCat = false;
  idArt = 0;
  price = 0;
  route = ""
  categoria? = ' '
  artigo? = ' '
  categoria_title = ' '
  artigo_title = ' '
  is_main_route = true;
  constructor(fb: FormBuilder, private router:Router) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }
  changeOfRoutes(){
    this.is_main_route = false;
    this.url = this.router.url.replace('/', ' > ').replace('/', ' > ')
    this.newurl = this.url.replace(' > ', '')
    for(let i=0; i < 10; i++){
      this.url = this.url.replace('-', ' ')
    }
    if(this.url == ' > '){
      this.url = ' '
    }
    if(this.router.url == '' || this.router.url == '/' || this.router.url == ' '){
      console.log(`routas = ${this.url}`)
      this.is_main_route = true;
      this.categoria = ' '
      this.artigo = ' '
      this.artigo_title = ' '
      this.categoria_title = ' '
      this.url = " "
    }else{
      this.route = this.router.url
      console.log(this.router.url)
      // this.url = this.url.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')
      console.log('new url: '+this.newurl)
      if(this.newurl.indexOf(' > ') != -1){
        this.arrayurl = [
          this.newurl.substring(0, this.newurl.indexOf(' > ')),
          this.newurl.substring(this.newurl.indexOf(' > ')+3, this.newurl.length)
        ]
        console.log(this.arrayurl)
      }
      this.rota = this.router.url.replace('/', '');
      if(this.rota.indexOf('/')!=-1){
        this.categoria = this.rota.substring(0, this.rota.indexOf('/'));
        console.log('Categoria: '+this.categoria);
        var i = 0;
        for(i = 0; i < menuItems.length;i+=1){
          if(this.categoria == menuItems[i].slug){

            this.idCat = i;
            console.log(1)
          }
        }
        this.artigo = this.rota.substring(this.rota.indexOf('/')+1, this.rota.length);

        console.log('Artigo: '+this.artigo);

        for(i =0; i < menuItems[this.idCat].childrens.length;i+=1){
          if(this.artigo == menuItems[this.idCat].childrens[i].slug){
            this.idArt = i;
            this.content = menuItems[this.idCat].childrens[i].content;
            this.title = menuItems[this.idCat].childrens[i].name;
            this.price  = menuItems[this.idCat].childrens[i].price
            this.artigo = menuItems[this.idCat].childrens[i].slug
            this.artigo_title = menuItems[this.idCat].childrens[i].name
          }
        }
        this.categoria = menuItems[this.idCat].slug
        this.categoria_title = menuItems[this.idCat].name
      }else{
        this.categoria = this.rota;
        console.log('Categoria: '+this.categoria);
        var i = 0;
        for(i = 0; i < menuItems.length;i+=1){
          if(this.categoria == menuItems[i].slug){

            this.idCat = i;
            console.log(1)
          }
        }
        this.artigo = ' '
        this.artigo_title = ' '
        this.title = menuItems[this.idCat].name
        this.content = menuItems[this.idCat].content
        this.categoria = menuItems[this.idCat].slug
        this.categoria_title = menuItems[this.idCat].name
      }
    }
  }
}
