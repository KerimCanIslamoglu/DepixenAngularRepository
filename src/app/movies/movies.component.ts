import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  movies2;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe((data) => {
      console.log(data);
      this.movies = data['Search'];
    });

   
  }

}
