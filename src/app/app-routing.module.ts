import { MenuComponent } from './menu/menu.component';
import menuItems from './menuItems';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

interface Children{
  id?:number,
  name:string,
  content:string,
  slug?:string,
  price:number
}

interface Item{
  id?: number,
  content: string,
  name: string,
  slug?: string,
  childrens: Children[]
}

function generateRoutes(menu:Item[]){
  let routes:Routes = [];
  for(let i =0; i < menu.length;i++){
    routes.push({path: menu[i]['slug'], component: MenuComponent});
    for(let j=0; j < menu[i]['childrens'].length; j++){
      routes.push({path: menu[i]['slug']+'/'+menu[i]['childrens'][j]['slug'], component: MenuComponent});
    }
  }
  routes.push({path: "", component: MenuComponent});
  return routes;
}

const routes: Routes = generateRoutes(menuItems);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
