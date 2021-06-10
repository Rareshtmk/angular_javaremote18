import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./product-details.component";

@NgModule({
    declarations:[
        ProductDetailsComponent,
    ],
    exports:[
        ProductDetailsComponent,
    ],
    imports:[
        CommonModule,
    ]
})
export class ProductDetailsComponentModule{}