import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get tags(){
     return this.gifsService.tagsHistory;
  }

  // onTagClick(tag: string): void {
  //   console.log('Se hizo click en el tag:', tag);
  //   // Aquí puedes agregar el código adicional que desees ejecutar
  // }

  onTagClick1(tag: string):void {
    this.gifsService.searchTag(tag);
    
  }

}
