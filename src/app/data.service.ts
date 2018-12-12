import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPrices() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append(
      "X-Mashape-Key",
      "rcxHPajYS4msh8rz02QqGVz6wJNYp16nw8PjsnMGviroo61Tk9"
    );
    headers = headers.append("Accept", "application/json");
    return this.http.get(
      "https://newsrain-petrol-diesel-prices-india-v1.p.mashape.com/capitals",
      { headers }
    );
  }
}
