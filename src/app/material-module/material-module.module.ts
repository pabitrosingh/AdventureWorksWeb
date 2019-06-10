import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTreeModule} from '@angular/material';


@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports:[
    MatTreeModule,
    CommonModule,
    FormsModule
  ],
  
})
export class MaterialModule { }
