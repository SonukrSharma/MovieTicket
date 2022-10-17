import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BPageComponent } from './components/b-page/b-page.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RequestDialogComponent } from './components/request-dialog/request-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BPageComponent,
    DataFormComponent,
    DataTableComponent,
    NavbarComponent,
    EditDataComponent,
    DialogBoxComponent,
    RequestDialogComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
