import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  movie:any;
  bookingForm!: FormGroup;
  userInput:any
  price:number=231
  amount:number=0
  isDisable=false


  constructor(public dialog:MatDialog,private form:FormBuilder,private route:ActivatedRoute,private service:PostService) { }

  ngOnInit(): void {
    //getting data for selected movie for collecting user Details
    let mid=this.route.snapshot.paramMap.get('id')
    mid && this.service.getData(parseInt(mid)).subscribe(res=>{this.movie=res})

    //form controls
    this.bookingForm=this.form.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      ntickets:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      show:['',[Validators.required]],
      date:['',[Validators.required]],
    })
    this.bookingForm.valueChanges.subscribe(res=>{
      this.userInput=this.bookingForm.value;
      let ticket=this.userInput.ntickets;
      
      if(this.movie.tickets - ticket < 0){
        this.isDisable=true
        
      }else{
        this.isDisable=false
      }
      this.amount=this.price*ticket;
      console.log(this.isDisable);
      
      
    })
    
    // console.log(data.ntickets);
    
  }
  openDialog(){
    this.dialog.open(DialogBoxComponent,{
      width:'400px',
      height:'450px'
      
    })
  }

  OnSubmit(data:any,id:string){
    let n:any=this.bookingForm.value
    n.movieID=this.movie.id
    n.movie=this.movie.name
    n.amount=this.amount  
    this.updateTickets(this.movie,id,n.ntickets);
    return this.service.storeUserData(n)
  }
  updateTickets(data:any,id:string,n:number){
    this.service.update(data,id,n).subscribe(res=>{this.movie=res})
    console.log(this.movie)
      
  }
}
