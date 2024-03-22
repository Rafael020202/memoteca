import { Component, OnInit, Input } from '@angular/core';

type Thought = {
  author: string,
  content: string,
  model: string
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  constructor() { }

  @Input()
  thought = {} as Thought;

  ngOnInit(): void {
  }

}
