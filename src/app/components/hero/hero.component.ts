import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconsComponent } from '../../shared/icons.component';

@Component({
  selector: 'app-hero', imports: [IconsComponent], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="top" aria-labelledby="hero-heading">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="availability"><span></span> Senior Software Engineer · Kathmandu, Nepal</p>
          <h1 id="hero-heading">Engineering software<br><em>built to scale.</em></h1>
          <p class="hero-intro">I'm Mahendra Pandey, a software engineer building scalable web applications with .NET Core, Angular, Azure, and multi-tenant architecture.</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">Explore my work <app-icon name="arrow" /></a>
            <a class="button secondary" href="/Mahendra_Pandey.pdf" download="Mahendra_Pandey_CV.pdf">Download CV <app-icon name="download" /></a>
          </div>
          <div class="hero-links">
            <a href="mailto:mahendranpandey@gmail.com"><app-icon name="mail" /> Email</a>
            <a href="https://linkedin.com/in/pmahendra" target="_blank" rel="noopener noreferrer"><app-icon name="linkedin" /> LinkedIn</a>
          </div>
        </div>
        <div class="code-visual card" aria-label="Technical focus">
          <div class="code-bar"><span></span><span></span><span></span><small>mahendra.engineer</small></div>
          <div class="code-body" aria-hidden="true">
            <p><b>01</b><span class="violet">public class</span> <span class="green">Engineer</span></p>
            <p><b>02</b>{{ '{' }}</p>
            <p><b>03</b>&nbsp;&nbsp;<span class="blue">focus</span>: [</p>
            <p><b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;<span class="amber">".NET Core"</span>,</p>
            <p><b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;<span class="amber">"Angular"</span>,</p>
            <p><b>06</b>&nbsp;&nbsp;&nbsp;&nbsp;<span class="amber">"Azure"</span></p>
            <p><b>07</b>&nbsp;&nbsp;];</p>
            <p><b>08</b>&nbsp;&nbsp;<span class="blue">architecture</span>: <span class="amber">"multi-tenant"</span>;</p>
            <p><b>09</b>{{ '}' }}</p>
          </div>
          <div class="system-line"><span></span><p>Systems online</p><i></i><small>Scalable · Cloud-native</small></div>
        </div>
      </div>
      <a class="scroll-cue" href="#about" aria-label="Scroll to about section"><span></span> Scroll to discover</a>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
