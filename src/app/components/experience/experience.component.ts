import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <p class="eyebrow">Experience</p><h2 class="section-title" id="experience-title">A career built across the full development lifecycle.</h2>
        <p class="section-intro">From hands-on application development to architecture, cloud delivery, and technical leadership.</p>
        <div class="experience-layout">
          <div class="role-tabs" role="tablist" aria-label="Experience by company">
            @for (experience of experiences; track experience.company; let i = $index) {
              <button type="button" role="tab" [attr.aria-selected]="activeIndex() === i" [class.active]="activeIndex() === i" (click)="activeIndex.set(i)">
                <span>{{ experience.period }}</span><strong>{{ experience.company }}</strong><small>{{ experience.role }}</small>
              </button>
            }
          </div>
          <article class="experience-card card" role="tabpanel">
            <header><div><p>{{ selectedExperience().company }}</p><h3>{{ selectedExperience().role }}</h3></div><span>{{ selectedExperience().period }}</span></header>
            <p class="summary">{{ selectedExperience().summary }}</p>
            <ul>@for (highlight of selectedExperience().highlights; track highlight) { <li>{{ highlight }}</li> }</ul>
            <div class="tags">@for (technology of selectedExperience().technologies; track technology) { <span>{{ technology }}</span> }</div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  readonly activeIndex = signal(0);
  readonly selectedExperience = () => this.experiences[this.activeIndex()];
}
