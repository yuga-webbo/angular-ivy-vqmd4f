import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanningContainerComponent } from './panning-container.component';
import { PanningItemDirective } from './panning-item.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PanningContainerComponent, PanningItemDirective],
  exports: [PanningContainerComponent, PanningItemDirective],
})
export class PanningModule {}
