import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {
  MatCardModule,
  MatDividerModule,
  MatRippleModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatRippleModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
