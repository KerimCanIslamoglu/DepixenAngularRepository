import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_KEY = 'c002cb14';
  
  constructor(private httpClient: HttpClient) {  }
 
  public getMovies(){
    return this.httpClient.get(`http://www.omdbapi.com/?s=game&type=movie&page=2&apikey=${this.API_KEY}`);
  }



  public getMovieDetails(imdbID:string){
 console.log(Object.values(imdbID));

    return this.httpClient.get(`http://www.omdbapi.com/?i=${Object.values(imdbID)}&apikey=${this.API_KEY}`);
  }
  
}
