import { Component, OnInit,Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-b-page',
  templateUrl: './b-page.component.html',
  styleUrls: ['./b-page.component.css']
})
export class BPageComponent implements OnInit {
  movie:any
  constructor(private route:ActivatedRoute, private service: PostService,private router:Router) { }

  ngOnInit(): void {
    let mid=this.route.snapshot.paramMap.get('id')
    mid && this.service.getData(parseInt(mid)).subscribe(res=>{this.movie=res})
  }
  Onclick(movie:any){
    this.router.navigate(["bookingPage/"+movie.id+"/details"]); 
  }
  OnBuy(movie:Object,id:string,n:number){
    this.service.update(movie,id,n).subscribe(res=>{this.movie=res})
    console.log(this.movie)
  }
}
