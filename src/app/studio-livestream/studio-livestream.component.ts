import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,NgForm,Validators} from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  liveForm:FormGroup;

constructor(private formBuilder:FormBuilder , private breakpointObserver: BreakpointObserver){

  this.liveForm = formBuilder.group({
    title:['', [Validators.required, Validators.maxLength(100)]],
    startDate:['',Validators.required],
    startTime:['',Validators.required],
    endTime:['',Validators.required],
    endDate:['',Validators.required],
    guests:['',Validators.email]

   

    
    

    
  })
}
  ngOnInit(): void {
  }
  postData(){}

}
