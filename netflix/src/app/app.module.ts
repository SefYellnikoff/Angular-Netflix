import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule }    from '@angular/common/http';
import { GenresComponent } from './genres/genres.component';
import { FilmService } from './services/film.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilmPipe } from './pipes/search-film.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    AddActorComponent,
    AddFilmComponent,
    AddGenreComponent,
    DashboardComponent,
    EditActorComponent,
    EditFilmComponent,
    EditGenreComponent,
    FilmsComponent,
    GenresComponent,
    SearchFilmPipe,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
