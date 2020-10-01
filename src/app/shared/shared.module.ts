import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FlatIconComponent } from './components/flat-icon/flat-icon.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, FlatIconComponent, CardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FlatIconComponent, CardComponent]
})
export class SharedModule {}