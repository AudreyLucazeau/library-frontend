import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo: Read More Component';
  data: string = "I like this read-more component because it's very helpful. This tutorial so good. I will share it with others.";
  dataLength: boolean;
  ngOnInit() { 
    this.isReadMore(this.data)
  }
  
  isReadMore(data:string) {
    // (data.length > 30) ? this.dataLength = false : this.dataLength = true;
    this.dataLength = !(data.length > 30)
  }
}