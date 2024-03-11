import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought = {
    id: 1,
    content: 'some random thought',
    author: 'some random author',
    model: 'modelo1'
  };

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    alert('123-test');
  }

  submit(e: Event) {
    e.preventDefault();
  }

}
