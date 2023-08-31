import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gifs-serach-box',
  template:`
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagImput>
  `

})

export class SearchBoxComponent {

  @Output() tagSearched = new EventEmitter<string>();

  constructor(private gifsService: GifsService) { }

  @ViewChild("txtTagImput")
  public tagImput!:ElementRef<HTMLInputElement>


  searchTag(){
    const newTag = this.tagImput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagImput.nativeElement.value = "";
  }

}
