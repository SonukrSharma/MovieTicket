import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  movieData:any
  movie:any
  displayedColumns: string[] = ['id', 'name','movie', 'email', 'mobile','ntickets','date','show','action'];
  dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
  
  // @ViewChild(MatSort) matSort!:MatSort
  
  constructor(public dialog:MatDialog,private service:PostService,private route:Router) { }
  
  ngOnInit(): void {
    this.service.getUserData().subscribe(res=>{
      this.movieData=res
      this.dataSource=new MatTableDataSource<any>(this.movieData);
      // this.dataSource.sort = this.matSort
    })
  }

  OnClick(data:any){
    this.route.navigate(["editTicketInfo/"+data.id]);
  }
  OnCancel(id:string){
    this.openDialog()
    let userdata:any=this.service.getEditable(parseInt(id))
    this.movie=this.service.getData(userdata.movieID)
    this.movie.tickets=this.movie.tickets+userdata.ntickets
    this.service.updateCancellation(this.movie,userdata.movieID)
    this.service.cancelBooking(id).subscribe(res=>{this.movieData=res});
  }
  openDialog(){
    this.dialog.open(RequestDialogComponent,{
      width:'400px',
      height:'450px'  
    })
  }
}
  
