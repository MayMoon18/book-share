import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flat-icon',
  templateUrl: './flat-icon.component.html',
  styleUrls: ['./flat-icon.component.scss']
})
export class FlatIconComponent implements OnInit {
  @Input() icon: string;
  @Input() pathUrl: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo() {
    this.router.navigate([this.pathUrl]);
  }

}
