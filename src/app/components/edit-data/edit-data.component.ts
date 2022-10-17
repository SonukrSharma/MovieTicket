import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  udata:any
  movie:any
  bookingForm!: FormGroup;
  a:any
  price:number=231
  amount:number=0
  isDisable=false
  userInput: any;

  constructor(public dialog:MatDialog,private form:FormBuilder,private route:ActivatedRoute,private service:PostService) { }

  ngOnInit(): void {
    let mid=this.route.snapshot.paramMap.get('id')
    mid && this.service.getEditable(parseInt(mid)).subscribe(res=>{
      this.udata=res
      this.a=this.udata
      this.service.getData(this.a.movieID).subscribe(response=>{
        this.movie=response
      })
    })
    this.bookingForm=this.form.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      ntickets:['',[Validators.required]],
      email:['',[Validators.required,Validators.minLength(2)]],
      phone:['',[Validators.required,Validators.minLength(2)]],
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
    })
  }
  openDialog(){
    this.dialog.open(RequestDialogComponent,{
      width:'400px',
      height:'450px'
      
    })
  }
  OnSubmit(data:any){
    let n:any=this.bookingForm.value
    this.movie.tickets=this.movie.tickets+data.ntickets
    this.updateTickets(this.movie,this.movie.id,n.ntickets);
    data.ntickets=n.ntickets
    return this.service.updateUserData(data,data.id).subscribe(res=>{this.udata=res})
  }
  updateTickets(data:any,id:string,n:number){
    this.service.update(data,id,n).subscribe(res=>{this.movie=res})      
  }

}
