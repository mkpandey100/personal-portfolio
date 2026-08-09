import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container about-grid">
        <div><p class="eyebrow">About</p><h2 class="section-title" id="about-title">Software engineering with an architectural mindset.</h2></div>
        <div class="about-copy">
          <p class="lead">I work across analysis, design, testing, and implementation to build dependable web applications.</p>
          <p>My experience spans object-oriented programming, service-oriented architecture, N-tier applications, and modern cloud-native systems. I adapt to changing priorities, meet deadlines, and bring a genuine passion for coding to every stage of development.</p>
          <div class="principles">
            <div><span>01</span><strong>Scalable systems</strong><small>Multi-tenant and cloud-native architecture</small></div>
            <div><span>02</span><strong>Quality by design</strong><small>Testing, code review, and maintainability</small></div>
            <div><span>03</span><strong>End-to-end thinking</strong><small>From requirements to technical solutions</small></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
