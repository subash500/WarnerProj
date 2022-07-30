import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  cols=5;
  rowHeight='340px';
  colsQuick=3;
  colsRec=2;
  rowsHeightRec='240px'
  colsHeightQuick='160px'
 
  handSetCol=false;
  typesOfShoes = [
    {name:'Boots', spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
    {name:'Clogs',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
    {name:'Loafers',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
    {name:'Moccasins',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
    {name:'Sneakers',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    {name:'Boots',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
    {name:'Clogs',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
     {name:'Loafers',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
     {name:'Moccasins',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}, 
     {name:'Sneakers',spanName:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
  
  
  ];
  isHandset:Observable<BreakpointState>=this.responsive.observe([
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.HandsetLandscape
  ])
  constructor(private responsive:BreakpointObserver){

  }

  ngOnInit() { 
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(resultImage=>{
      const breakpoints=resultImage.breakpoints;
      if(breakpoints[Breakpoints.TabletPortrait]){
        this.cols=3;
        this.rowHeight='400px';
        this.colsQuick=3;
        this.colsRec=4;
       
        this.handSetCol=true;
    }else if(breakpoints[Breakpoints.TabletLandscape]){
        this.cols=5;
        this.rowHeight='400px'
        this.colsQuick=4;
        this.colsRec=4;
        
        this.handSetCol=true;
    }else if(breakpoints[Breakpoints.HandsetPortrait]){
        this.cols=2;
        this.rowHeight='200px';
        this.colsQuick=2;
        this.colsRec=2;
        this.handSetCol=true;

    }else if(breakpoints[Breakpoints.HandsetLandscape]){
        this.cols=3;
        this.rowHeight='200px'
        this.colsQuick=3;
        this.colsRec=2;
        this.handSetCol=true;
    }else{
        this.cols=5;
        this.rowHeight='340px';
        this.handSetCol=false;
        this.colsQuick=3;
        this.colsRec=2;

    }
    })
  } 
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
   
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
 
}
