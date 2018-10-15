import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-word-def',
  templateUrl: './word-def.component.html',
  styleUrls: ['./word-def.component.css']
})
export class WordDefComponent implements OnInit {
  @Input() def1: string;
  @Input() def2: string;

  constructor() { }

  ngOnInit() {
  }

}
