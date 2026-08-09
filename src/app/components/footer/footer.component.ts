import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<footer><div class="container"><a href="#top" class="mark" aria-label="Back to top">MP</a><p>Mahendra Pandey · Senior Software Engineer</p><a href="#top">Back to top ↑</a></div></footer>`,
  styles: `footer{border-top:1px solid var(--line);padding:1.5rem 0;color:#718b81;font-size:.75rem}footer .container{display:flex;align-items:center;justify-content:space-between;gap:1rem}.mark{display:grid;place-items:center;width:2rem;height:2rem;border:1px solid var(--line);border-radius:.5rem;color:var(--accent);font-weight:800}footer a:last-child{transition:color .2s ease}footer a:last-child:hover{color:var(--accent)}@media(max-width:520px){footer .container{flex-wrap:wrap}footer p{order:3;width:100%;margin:0}}`,
})
export class FooterComponent {}
