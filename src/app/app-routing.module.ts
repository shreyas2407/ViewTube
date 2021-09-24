import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {path: '',component:VideoContentComponent},
  {path: 'live',component:StudioLivestreamComponent},
  {path: 'upload',component:StudioUploadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[VideoContentComponent,StudioUploadComponent,StudioLivestreamComponent];
