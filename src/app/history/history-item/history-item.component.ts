import { Component, OnInit, Input, Output } from '@angular/core';
import { HistoryWord } from '../../../shared/historyWord.model';
import { HistoryService } from '../../history.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @Input() item :HistoryWord;
  @Input() historyWords :HistoryWord[];
  url: string;
  @Output() title: string;
  def1: string;
  def2: string;


  constructor(private historyService: HistoryService, private apiService: ApiService) { }

  ngOnInit() {
    this.historyWords = this.historyService.getHistoryWords();
    this.historyService.historyWordChanged
      .subscribe(
        (historyWords: HistoryWord[]) => {
          this.historyWords = historyWords;
        }
      );
  }

  onSelected() {
    //this.historyService.historySelected.emit(this.item);
    this.historyService.research(this.item);
  }

}
