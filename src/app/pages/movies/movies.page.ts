import { MovieService, SearchType } from "./../../services/movie.service";
import { LoadingService } from "./../../services/loading.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"]
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = "";
  type: SearchType = SearchType.all;

  constructor(
    public loading: LoadingService,
    private movieService: MovieService
  ) {}

  ngOnInit() {    
  }

  searchChanged() {
    if (this.searchTerm.toString().length >= 3) {
      // Call our service function which returns an Observable
      // this.results = this.movieService.searchData(this.searchTerm, this.type);

      this.loading.present();
      this.movieService.searchData(this.searchTerm, this.type).subscribe(
        results => {
          this.results = results;
          this.loading.dismiss();
        },
        error => this.loading.dismiss()
      );
    }
  }
}
