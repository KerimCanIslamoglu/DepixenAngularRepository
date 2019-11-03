import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
details;
imdbID;
  constructor(private apiService: ApiService,private _ActivatedRoute: ActivatedRoute) {
     this._ActivatedRoute.params.subscribe( params =>{
      console.log(params);
      this.imdbID=params;
     } 
    
     ); 
    }

  ngOnInit() {
 console.log(this.imdbID);
    this.apiService.getMovieDetails(this.imdbID).subscribe((data)=>{
      console.log(data);
      this.details = data;
  });
}
}
