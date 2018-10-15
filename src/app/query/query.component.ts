import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { HistoryService } from '../history.service';
import { HistoryWord } from '../../shared/historyWord.model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  @ViewChild('wordInput') wordInputRef: ElementRef;
  word: string;
  url: string;
  //xhr: XMLHttpRequest;
  def1: string;
  def2: string;
  title: string;

  constructor(private apiService: ApiService, private historyService: HistoryService) { }

  ngOnInit(){
    this.historyService.historySelected
      .subscribe(
        (result: HistoryWord) => {
          this.url = this.apiService.makeUrl(result.name);
          this.apiService.makeRequest(this.url)
            .subscribe(result =>{
              this.title = result[0].word;
              this.def1 = result[0].text;
              this.def2 = result[1].text;
            });
        }
      );
  }

  onQuery(){
    const ingWord = this.wordInputRef.nativeElement.value;
    const newWord = new HistoryWord(ingWord);
    this.url = this.apiService.makeUrl(this.word);
    this.apiService.makeRequest(this.url)
      .subscribe(result =>{
        this.title = result[0].word;
        this.def1 = result[0].text;
        this.def2 = result[1].text;
      });
    this.historyService.addHistoryWord(newWord);
  }

}

