import { Component, OnInit, Input, Output } from '@angular/core';
import { HistoryService } from 'src/app/history.service';
import { HistoryWord } from '../../shared/historyWord.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  // selectedItem: HistoryWord;
  item :HistoryWord;
  historyWords: HistoryWord[];
  @Output() title: string;

  constructor(private historyService: HistoryService) { }


  ngOnInit() {
    this.historyWords = this.historyService.getHistoryWords();
    this.historyService.historyWordChanged
      .subscribe(
        (historyWords: HistoryWord[]) => {
          this.historyWords = historyWords;
        }
      );

      // this.historyService.historySelected
      // .subscribe(
      //   (item: HistoryWord) => {
      //     this.item = item;
      //   }
      // );
  }
}
