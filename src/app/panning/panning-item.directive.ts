import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[panningItem]',
})
/**
 * This directive really just exists to make it easier for the panning container component to find and do math with it's content children.
 */
export class PanningItemDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
