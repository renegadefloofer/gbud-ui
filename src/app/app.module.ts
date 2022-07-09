import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HeaderComponent } from './components/header/header.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, HeaderComponent, AddItemComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
