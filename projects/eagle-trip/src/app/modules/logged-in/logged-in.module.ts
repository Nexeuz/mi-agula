import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [LoggedInComponent, MapComponent],
    imports: [
        CommonModule,
        LoggedInRoutingModule,
        MatCardModule,
        MatSidenavModule
    ]
})
export class LoggedInModule { }
