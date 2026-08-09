import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="education" aria-labelledby="education-title">
      <div class="container education-grid">
        <div><p class="eyebrow">Education</p><h2 class="section-title" id="education-title">The foundation.</h2></div>
        <article class="education-card card">
          <span class="year">Jun 2013 — Jul 2017</span><p>Himalaya College of Engineering</p><h3>Bachelor</h3>
          <div class="line"><i></i><span>Engineering education</span></div>
        </article>
      </div>
    </section>
  `,
  styleUrl: './education.component.scss',
})
export class EducationComponent {}
