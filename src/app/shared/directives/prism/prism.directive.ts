import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { languages, highlight } from 'prismjs';

@Directive({
  selector: '[appPrism]',
  standalone: true,
})
export class PrismDirective implements AfterViewInit {
  @Input() public code!: string;
  @Input() public language = 'javascript';

  constructor(
    private readonly host: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  public ngAfterViewInit(): void {
    const code = this.code || this.host.nativeElement.innerText;
    const grammar = languages[this.language];
    const html = highlight(code, grammar, this.language);
    this.renderer.setProperty(this.host.nativeElement, 'innerHTML', html);
  }
}
