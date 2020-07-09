import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from '../components/side-bar/side-bar.component';
import {TopBarComponent} from '../components/top-bar/top-bar.component';


@NgModule({
  declarations: [SideBarComponent, TopBarComponent],
  imports: [
    CommonModule
  ],
  exports: [SideBarComponent, TopBarComponent]
})
export class SharedModule {
}
