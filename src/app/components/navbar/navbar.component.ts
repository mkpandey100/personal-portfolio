import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NAV_ITEMS } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="nav-shell">
      <nav class="container navbar" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="Mahendra Pandey — Back to top"><span>MP</span><i></i></a>
        <button class="menu-button" type="button" [attr.aria-expanded]="menuOpen()" aria-controls="nav-links" aria-label="Toggle navigation" (click)="toggleMenu()">
          <span></span><span></span>
        </button>
        <div class="nav-links" id="nav-links" [class.open]="menuOpen()">
          @for (item of navItems; track item.href) { <a [href]="item.href" (click)="closeMenu()">{{ item.label }}</a> }
          <a class="contact-link" href="#contact" (click)="closeMenu()">Let's talk</a>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly navItems = NAV_ITEMS;
  readonly menuOpen = signal(false);
  toggleMenu(): void { this.menuOpen.update((open) => !open); }
  closeMenu(): void { this.menuOpen.set(false); }
}
