import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsumerComponent } from './exercise/consumer.component';
import { ProducerComponent } from './exercise/producer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ConsumerComponent, ProducerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
