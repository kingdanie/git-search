import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from './material-ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialUiModule,
  ],
  exports: [
    ReactiveFormsModule,
    MaterialUiModule,
  ],
})
export class AppCommonModule { }
