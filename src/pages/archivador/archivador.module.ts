import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivadorPage } from './archivador';

@NgModule({
  declarations: [
    ArchivadorPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivadorPage),
  ],
})
export class ArchivadorPageModule {}
