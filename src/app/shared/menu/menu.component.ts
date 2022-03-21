import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

  this.items = [
    {
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop pi-fw',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-fw pi-align-left',
          routerLink: '/',
        },
        {
          label: 'Números',
          icon: 'pi pi-fw pi-dollar',
          routerLink: 'numeros',
        },
        {
          label: 'No comunes',
          icon: 'pi pi-fw pi-globe',
          routerLink: 'no-comunes',
        }
      ]
    },
    {
      label: 'Pipes Perzonalizados',
      icon: 'pi pi-fw pi-cog',
      routerLink: 'ordenar'
    }
  ];
}

}
