import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from 'src/controls/controls.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MaterialComponent } from './material/material.component';
import { VanillaComponent } from './vanilla/vanilla.component';

const routes: Routes = [
  { path: "bootstrap", component: BootstrapComponent },
  { path: "material", component: MaterialComponent },
  { path: "vanilla", component: VanillaComponent },
  { path: "**", component: VanillaComponent }
];

@NgModule({
  declarations: [
    MaterialComponent,
    BootstrapComponent,
    VanillaComponent
  ],
  imports: [
    FormsModule, CommonModule, ControlsModule, RouterModule.forChild(routes)
  ]
})
export class UiStylesModule { }
