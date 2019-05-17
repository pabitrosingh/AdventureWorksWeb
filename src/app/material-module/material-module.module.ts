import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTreeModule} from '@angular/material/tree';


@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [
    MatTreeModule
  ],
  exports:[
    MatTreeModule,
    CommonModule,
    FormsModule
  ],
  
})
export class MaterialModule { }
