import { Component,Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit{
  @Input() gifs: Gif[] = [];

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
