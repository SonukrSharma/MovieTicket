import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:any;
  constructor(private router:Router,private service:PostService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response=>{this.movie=response})
    
  }
  
  Onclick(movie:any){
    this.router.navigate(["bookingPage/"+movie.id]); 
  }
}
