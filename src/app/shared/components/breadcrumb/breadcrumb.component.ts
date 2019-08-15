import { Component, OnInit, Input } from '@angular/core';

import { Breadcrumb } from '../../models/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() listaDeItens: Array<Breadcrumb> = [
    { name: '', link:'', title: '' }
  ];

  constructor() { }

  isLast(item: Breadcrumb){
    const index = this.listaDeItens.indexOf(item);
    return index + 1 == this.listaDeItens.length;
  }

}
