import { Injectable, EventEmitter } from '@angular/core';
import { HistoryWord } from '../shared/historyWord.model';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  historyWordChanged = new EventEmitter<HistoryWord[]>();
  historySelected = new EventEmitter<HistoryWord>();
  def1: string;
  def2: string;
  title: HistoryWord;

  private historyWords: HistoryWord[] = [
    // new HistoryWord('apple'),
    // new HistoryWord('tomato')
  ];

  constructor(private apiService: ApiService) { }

  getHistoryWords(){
    return this.historyWords.slice();
  }

  addHistoryWord(historyWord: HistoryWord){
    this.historyWords.push(historyWord);
    this.historyWordChanged.emit(this.historyWords.slice());
  }

  research(historyWord){
    this.historySelected.emit(historyWord);
  }

}
