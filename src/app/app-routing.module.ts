import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "movies",
    loadChildren: "./pages/movies/movies.module#MoviesPageModule"
  },
  {
    path: "movies/:id",
    loadChildren:
      "./pages/movie-details/movie-details.module#MovieDetailsPageModule"
  },
  { path: "menu", loadChildren: "./pages/menu/menu.module#MenuPageModule" },
  { path: "main", loadChildren: "./pages/main/main.module#MainPageModule" },
  { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  { path: 'flutter', loadChildren: './pages/flutter/flutter.module#FlutterPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
