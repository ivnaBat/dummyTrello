import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

const MaterialComponents = [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
];
@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {}