import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  constructor() { }

  thoughts = [
    /*{
      id: 1,
      content: 'Roses are red violets are blue so as you',
      author: 'Jhon Doe',
      model: '1'
    },
    {
      id: 1,
      content: 'Roses are red violets are blue so as you',
      author: 'Jhon Doe',
      model: '2'
    },
    {
      id: 1,
      content: 'Roses are red violets are blue so as you',
      author: 'Jhon Doe',
      model: '3'
    }*/
  ];

  ngOnInit(): void {
  }

}
