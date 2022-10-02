import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingmovies: any;
  theatremovies:any;
  popularmovies:any;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.gettrendingmovies();
    this.gettheatremovie();
    this.getpopularmovie()
  }
  gettrendingmovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingmovies = movies ;
      
    });
  }

  gettheatremovie() {
      this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
        this.theatremovies = movies;
        
      });
    }
    getpopularmovie() {
      this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
        this.popularmovies = movies;
        
      });
    }
    gotomovie(type:string,id:any){
      this.router.navigate(['movie',type,id]);

    }
  }


 

