import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { BarcodeRoutingModule }	from './barcode.routing';
import { BarcodeComponent }		from './barcode.component';
import { BarcodeInventoryComponent }  from './inventory/inventory.component';
import { BarcodeDetailsComponent }  from './details/details.component';
import { BarcodeLoginComponent }  from './login/login.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		BarcodeRoutingModule,
	],
	declarations: [
		BarcodeComponent,
		BarcodeInventoryComponent,
		BarcodeDetailsComponent,
		BarcodeLoginComponent,
	]
})
export class BarcodeModule { }
