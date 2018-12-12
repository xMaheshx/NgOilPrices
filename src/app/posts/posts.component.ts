import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { Capabilities } from "protractor";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  response$;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPrices().subscribe(data => {
      this.response$ = data;
      this.response$.cities = this.response$.cities.sort((a, b) =>
        a.city > b.city ? 1 : -1
      );
    });
  }
}
