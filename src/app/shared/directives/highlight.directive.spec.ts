import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
