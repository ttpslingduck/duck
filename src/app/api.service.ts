import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = "5a1d59fba2c80d6e9a20b0c83da02b0a4c862a9668479c8f2";
  word = "";

  constructor(private http: HttpClient) { }

  makeUrl(word){
    return "https://api.wordnik.com/v4/word.json/"+ word + "/definitions" +
    "?useCanonical=false" +
    "&limit=200" +
    "&api_key=" + this.apiKey;
  }

  makeRequest(url) {
    // var xhr = new XMLHttpRequest();

    // xhr.onload = function() {
    //   var def = document.querySelector('.definition');
    //   var qword = document.querySelector('.qword');

    //   if(xhr.status === 200){
    //     var response = JSON.parse(this.responseText);
    //       if (response[0] === undefined){
    //         qword.innerHTML = "";
    //         def.innerHTML = "拼錯了";
    //       }else{
    //         // 把查詢結果放進標題
    //         qword.innerHTML = response[0].word;

    //         // 放兩個單字釋義
    //         def.innerHTML = "1. "+ response[0].text+"<br>2. "+ response[1].text;
    //       }

    //   }else if (xhr.status === 404){
    //     def.innerHTML = "請輸入一個英文單字";
    //   }
    // };
    // xhr.open("GET", url, true);
    // xhr.send();

    return this.http.get(url);
  }
}
