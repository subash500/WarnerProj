import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class loginComponent implements OnInit{

    cols=2;
    rowHeight='720px';

    constructor(private responsive:BreakpointObserver, private router:Router){

    }
 
ngOnInit(): void {
    this.responsive.observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
    ]).subscribe(result=>{

        this.cols=2;
        this.rowHeight='720px';
        const breakpoints=result.breakpoints;
        if(breakpoints[Breakpoints.TabletPortrait]){
            this.cols=1;
            this.rowHeight='600px'
        }else if(breakpoints[Breakpoints.TabletLandscape]){
            this.cols=2;
            this.rowHeight='840px'
        }else if(breakpoints[Breakpoints.HandsetPortrait]){
            this.cols=1;
            this.rowHeight='500px'
        }else if(breakpoints[Breakpoints.HandsetLandscape]){
            this.cols=2;
            this.rowHeight='500px'
        }else{
            this.cols=2;
        }
    })
}
onLogin(){
    this.router.navigate(['/home'])
}

}


