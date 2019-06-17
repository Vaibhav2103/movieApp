import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,of } from "rxjs";
import { map } from "rxjs/operators";
import { LoadingService } from "./loading.service";

export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode"
}

@Injectable({
  providedIn: "root"
})
export class MovieService {
  url = "http://www.omdbapi.com/";
  apiKey = "55b53009"; // <-- Enter your own key here!

  constructor(private http: HttpClient, public loading: LoadingService) {}

  searchData(title: string, type: SearchType): Observable<any> {
    // this.loading.present();
    return this.http
      .get(
        `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
      )
      .pipe(
        map(results => {
          // this.loading.dismiss();
          return of(results["Search"]);
        })
      );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
