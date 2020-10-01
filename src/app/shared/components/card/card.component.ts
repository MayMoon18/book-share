import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() author: string;
  @Input() name: string;
  @Input() imageUrl: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
