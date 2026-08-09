import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_LINKS } from '../../data/portfolio.data';
import { IconsComponent } from '../../shared/icons.component';

@Component({
  selector: 'app-contact', imports: [IconsComponent], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="contact-orbit" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="container contact-inner">
        <p class="eyebrow">Contact</p>
        <h2 class="section-title" id="contact-title">Let's build something<br><em>that lasts.</em></h2>
        <p>For engineering opportunities and professional conversations, reach out directly.</p>
        <a class="email-link" href="mailto:mahendranpandey@gmail.com">mahendranpandey&#64;gmail.com <app-icon name="arrow" /></a>
        <div class="contact-grid">
          @for (item of contactLinks; track item.label) {
            <div><span>{{ item.label }}</span>
              @if (item.href) { <a [href]="item.href" [target]="item.external ? '_blank' : null" [rel]="item.external ? 'noopener noreferrer' : null">{{ item.value }} @if(item.external){ <app-icon name="external" /> }</a> }
              @else { <p>{{ item.value }}</p> }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.component.scss',
})
export class ContactComponent { readonly contactLinks = CONTACT_LINKS; }
