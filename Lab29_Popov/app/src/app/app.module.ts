import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { Routes, RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { T1Component } from './t1/t1.component';
import { FormControl, FormsModule } from '@angular/forms';
import { T2Component } from './t2/t2.component';
import { T4Component } from './t4/t4.component';
import { T5Component } from './t5/t5.component';
import { T6Component } from './t6/t6.component';
import { T7Component } from './t7/t7.component';
import { T8Component } from './t8/t8.component';
import { T9Component } from './t9/t9.component';
import { T10Component } from './t10/t10.component';

const routes: Routes = [
//  {path: '', component: AppComponent},
 {path: 't1', component: T1Component},
 {path: 't3', component: T2Component},
 {path: 't4', component: T4Component},
 {path: 't5', component: T5Component},
 {path: 't6', component: T6Component},
 {path: 't7', component: T7Component},
 {path: 't8', component: T8Component},
 {path: 't9', component: T9Component},
 {path: 't10', component: T10Component}
]
@NgModule({
  declarations: [
    AppComponent,
    T1Component,
    T2Component,
    T4Component,
    T5Component,
    T6Component,
    T7Component,
    T8Component,
    T9Component,
    T10Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
