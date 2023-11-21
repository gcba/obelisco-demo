import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClipboard]',
  standalone: true
})
export class ClipboardDirective implements AfterViewInit {
  constructor(private readonly host: ElementRef, private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (navigator.clipboard) {
      const button = this.host.nativeElement.closest('pre').querySelector('button');
      this.renderer.listen(button, 'click', this.clipboard);
    }
  }

  public clipboard(event: PointerEvent): void {
    const button = event.target as HTMLButtonElement;
    const pre = button?.parentElement;
    const code = pre?.querySelector('code');
    const text = code?.innerText;
    navigator.clipboard.writeText(text!);
    button.innerText = 'Copiado!';

    setTimeout(() => {
      button.innerText = 'Copiar';
    }, 1000);
  }
}
