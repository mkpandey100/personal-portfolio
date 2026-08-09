import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section projects" id="projects" aria-labelledby="projects-title">
      <div class="container">
        <p class="eyebrow">Selected work</p><h2 class="section-title" id="projects-title">Systems shaped for scale, integration, and responsiveness.</h2>
        <p class="section-intro">Representative engineering work documented in my professional experience.</p>
        <div class="project-list">
          @for (project of projects; track project.index) {
            <article class="project-row">
              <span class="index">{{ project.index }}</span><h3>{{ project.title }}</h3><p>{{ project.description }}</p>
              <ul>@for (technology of project.technologies; track technology) { <li>{{ technology }}</li> }</ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent { readonly projects = PROJECTS; }
