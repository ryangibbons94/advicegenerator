import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Quote } from '../quoteInterface';

@Component({
  selector: 'app-advice-box',
  templateUrl: './advice-box.component.html',
  styleUrls: ['./advice-box.component.css'],
})
export class AdviceBoxComponent implements OnInit {
  spin = false;
  quote: any;
  constructor(private quoteService: QuoteService) {}

  getQuote() {
    this.spin = true;
    this.quoteService.getQuote().subscribe((quote) => {
      console.log(quote);
      this.quote = quote;
    });
    setTimeout(() => {
      this.spin = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.getQuote();
  }
}
