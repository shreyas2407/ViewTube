import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { ShellComponent } from './shell/shell.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import{ ReactiveFormsModule} from '@angular/forms';
// import momentDurationFormatSetup from "moment-duration-format";
import{RouterModule, Routes} from '@angular/router'






import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VideoContentComponent } from './video-content/video-content.component';
// import{ToastrModule} from 'ngx-toastr';




import { LayoutModule } from '@angular/cdk/layout';

import{ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ChipsBarComponent,
    ShellComponent,
    StudioLivestreamComponent,
    // StudioUploadComponent,
    // VideoContentComponent,
    routingComponents    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
