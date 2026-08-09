import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section skills" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <p class="eyebrow">Technical skills</p>
        <h2 class="section-title" id="skills-title">A focused stack for modern web systems.</h2>
        <p class="section-intro">Technologies and engineering practices used across enterprise, cloud, and real-time applications.</p>
        <div class="skill-grid">
          @for (group of skillGroups; track group.title; let i = $index) {
            <article class="skill-card card">
              <header><span>0{{ i + 1 }}</span><h3>{{ group.title }}</h3></header>
              <ul>@for (skill of group.skills; track skill) { <li>{{ skill }}</li> }</ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent { readonly skillGroups = SKILL_GROUPS; }
