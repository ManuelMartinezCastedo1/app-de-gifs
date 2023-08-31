import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: 'list.component.html'
})

export class CardListComponent {
  constructor() { }

  @Input()
  public gifs: Gif[] = [];

}
